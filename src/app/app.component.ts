import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
} from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component'
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
}