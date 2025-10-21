
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'git-station',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-X2BGC2IS.js"
    ],
    "route": "/git-station"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LDIT3XBC.js",
      "chunk-Y2BGE2T2.js",
      "chunk-HYMXANHI.js"
    ],
    "route": "/git-station/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KWXSEIIC.js",
      "chunk-Y2BGE2T2.js",
      "chunk-HYMXANHI.js"
    ],
    "route": "/git-station/starter-finder"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NOTYWYHL.js",
      "chunk-HYMXANHI.js"
    ],
    "route": "/git-station/readme"
  },
  {
    "renderMode": 2,
    "redirectTo": "/git-station",
    "route": "/git-station/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5975, hash: 'd3c076900334ede8fddca497800cb78fec9dd982d9f143edff633bafd4cb1ecb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1217, hash: '6c25cd1e789ca767a60b83e74e4a66394538625dda5b7aa1b83e9d427562d8dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'starter-finder/index.html': {size: 12065, hash: 'bc64b1333e7ffa81a82c0130cbbca88894e2b09c2c58684e5a3cc031f9f7e4ba', text: () => import('./assets-chunks/starter-finder_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 12065, hash: 'cf2a71ffba9d60ddf74a674b9b9f3cddade14ed85bc66641c8dd2ecd481f72a9', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'readme/index.html': {size: 12013, hash: '40ff62d5b37ee8d13978fde40548ea2ed4b7986a0289ff4abdf5350d07e33adc', text: () => import('./assets-chunks/readme_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11961, hash: 'ef8a0c25c716d82ce87f03ed1458fa32e041dcf0ab3b78f9c4eb02a20225fc2f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3L2O4T3X.css': {size: 14596, hash: 'EiPZe5i9R/8', text: () => import('./assets-chunks/styles-3L2O4T3X_css.mjs').then(m => m.default)}
  },
};
