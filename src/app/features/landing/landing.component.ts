import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket, faCode } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  constructor(private iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(faRocket, faCode);
    iconLibrary.addIconPacks(fas);
  }

  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json',
  };
}