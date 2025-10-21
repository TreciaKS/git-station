import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  appName = 'GitStation';
  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json',
  };
}