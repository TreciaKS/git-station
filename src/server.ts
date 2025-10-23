// server.ts
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import * as dotenv from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.get('/ssr/github/user/:username', async (req, res) => {
  const token = process.env['GITHUB_TOKEN'];
  const username = req.params.username;
  console.log('Proxying GitHub user request for:', username);

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Angular-SSR-App',
        Accept: 'application/vnd.github+json',
      },
    });

    if (!response.ok) {
      res.setHeader('Content-Type', 'application/json');
      return res
        .status(response.status)
        .json({ error: 'GitHub user not found' });
    }

    const data = await response.json();
    res.setHeader('Content-Type', 'application/json');
    return res.status(response.status).json(data); // ✅ added return
  } catch (err) {
    console.error('GitHub proxy error:', err);
    return res.status(500).json({ error: 'GitHub proxy failed' }); // ✅ added return
  }
});

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
