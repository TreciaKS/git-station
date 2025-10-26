import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket, faCode } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, LottieComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  constructor(private iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faRocket, faCode);
    iconLibrary.addIconPacks(fas);
  }

  options: AnimationOptions = {
    path: 'https://lottie.host/0757bc70-0a4e-45a8-9108-05e46f19e22d/6JF2GLPaT6.json',
  };
}