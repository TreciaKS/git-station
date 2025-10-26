import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error',
  imports: [LottieComponent],
  templateUrl: './error.component.html',
  styles: ``,
})
export class ErrorComponent {
  options: AnimationOptions = {
    path: 'https://lottie.host/f8689738-a271-445a-8c58-e124392d190a/3VgRcjVmu4.json',
  };
}
