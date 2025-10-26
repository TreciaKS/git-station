import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  options: AnimationOptions = {
    path: 'https://lottie.host/1c9c09d2-3e40-4f69-8e95-84d42382a61a/2zaSj1F63D.json',
  };
}