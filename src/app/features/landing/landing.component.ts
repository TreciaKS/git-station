import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, LottieComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json',
  };
}