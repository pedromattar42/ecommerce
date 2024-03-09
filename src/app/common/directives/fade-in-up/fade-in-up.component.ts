import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  PLATFORM_ID,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appFadeInUp]',
  standalone: true,
})
export class FadeInUpDirective implements AfterViewInit, OnDestroy {
  private animationPlayer?: AnimationPlayer;
  private intersectionObserver?: IntersectionObserver;
  private builder = inject(AnimationBuilder)

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const animation = this.builder.build([
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]);

      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animationPlayer = animation.create(this.el.nativeElement);
              this.animationPlayer.play();
            }
          });
        },
        { threshold: 0.1 }
      );

      this.intersectionObserver.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    this.animationPlayer?.destroy();
  }
}
