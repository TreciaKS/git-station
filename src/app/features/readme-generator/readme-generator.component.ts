import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ReadmeData {
  name: string;
  description: string;
  install: string;
  usage: string;
}

@Component({
  selector: 'app-readme-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './readme-generator.component.html',
})
export class ReadmeGeneratorComponent {
  data: ReadmeData = { name: '', description: '', install: '', usage: '' };
  markdown = '';

  generate(): void {
    this.markdown = `# ${this.data.name || 'Project Title'}

${this.data.description || 'Short description.'}

## Install
\`\`\`bash
${this.data.install || 'npm install'}
\`\`\`

## Usage
\`\`\`bash
${this.data.usage || 'npm start'}
\`\`\`

## License
MIT
`;
  }

  copy(): void {
    navigator.clipboard.writeText(this.markdown).catch(() => {});
  }
}