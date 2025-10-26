import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';
import { LottieComponent , AnimationOptions} from 'ngx-lottie'

@Component({
  selector: 'app-astro-side',
  imports: [LottieComponent, CommonModule],
  templateUrl: './astro-side.component.html',
  styles: ``,
})
export class AstroSideComponent {
  options: AnimationOptions = {
    path: 'https://lottie.host/f4005fa6-b11c-4f5c-9c7f-3057c68e894d/TjAcp4NNS1.json',
  };
}
