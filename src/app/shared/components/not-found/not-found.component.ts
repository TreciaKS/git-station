import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  @Input() message = 'No results found.';
  @Input() suggestion = 'Try refining your search.';

  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json',
  };
}