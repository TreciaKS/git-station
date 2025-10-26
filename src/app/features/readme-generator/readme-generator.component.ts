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
    this.markdown = `# ${this.data.name || 'Project Title ✨'}

    ${this.data.description || 'Short description ✍️'}

    ## Features 🚀
    \`\`\`The following features are found in # ${
      this.data.name || 'the project:'
    }
    ${this.data.features || 'Can login without auth?'}
    \`\`\`

    ## Installations ⚙️
    \`\`\`bash
    ${this.data.install || 'Packages installed or dependencies'}
    \`\`\`

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
