import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json', // Replace with your animation
  };
}