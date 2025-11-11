import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ReadmeData {
  name: string;
  description: string;
  install: string;
  features: string;
}

@Component({
  selector: 'app-readme-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './readme-generator.component.html',
})
export class ReadmeGeneratorComponent {
  data: ReadmeData = { name: '', description: '', install: '', features: '' };
  markdown = '';
  copyMessage = '';

  generate(): void {
    const escapeMarkdown = (text: string = ''): string => {
      return text
        .replace(/\\/g, '\\\\')
        .replace(/([#_*`~>\[\]\(\)])/g, '\\$1')
        .replace(/\n{3,}/g, '\n\n');
    };

    const name = escapeMarkdown(this.data.name || 'Project Title ✨');
    const description = escapeMarkdown(
      this.data.description || 'Short description ✍️'
    );

    const rawFeatures = this.data.features || '';
    const featuresList = rawFeatures
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => `- ${escapeMarkdown(line)}`)
      .join('\n');

    const rawInstall = this.data.install || '';
    const installList = rawInstall
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => `- ${escapeMarkdown(line)}`)
      .join('\n');

    this.markdown = `# ${name}

${description}

${featuresList ? `## Features 🚀\n${featuresList}\n` : ''}

${installList ? `## Installation ⚙️\n${installList}\n` : ''}

## License ⚠️
MIT
`;
}

  copy(): void {
    navigator.clipboard
      .writeText(this.markdown)
      .then(() => {
        this.copyMessage = '⭐️ Copied to clipboard!';
        setTimeout(() => (this.copyMessage = ''), 2000);
      })
      .catch(() => {
        this.copyMessage = '❌ Failed to copy';
        setTimeout(() => (this.copyMessage = ''), 2000);
      });
  }
}
