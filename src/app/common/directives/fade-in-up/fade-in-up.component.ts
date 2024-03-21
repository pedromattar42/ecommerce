import { AnimationBuilder, animate, style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
} from '@angular/core';

@Directive({
  selector: '[fadeInUp]',
  standalone: true,
})
export class FadeInUpDirective implements OnDestroy {
  private intersectionObserver?: IntersectionObserver | null = null;
  private hasAnimated = false;

  constructor(
    private el: ElementRef,
    private builder: AnimationBuilder,
  ) {
    afterNextRender(() => {
      this.intersectionObserver = new IntersectionObserver(() => {});
      const animation = this.builder.build([
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]);

      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              const player = animation.create(this.el.nativeElement);
              player.play();
              player.onDone(() => player.destroy());
            }
          });
        },
        { threshold: 0.1 }
      );

      this.intersectionObserver.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }
}
