import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SearchBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  appName = 'GitStation';
}