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
    path: 'https://lottie.host/f4bb7f62-c330-4384-a816-69087d248053/1wcVL3hk5Y.json',
  };
}