import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointService } from '../../../services/breakpoint/breakpoint.service';
import { BreakpointEnum } from '../../../models/breakpoint.enum';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent implements OnInit, OnDestroy {
  displayText = '';
  currentBreakpoint?: BreakpointEnum;
  protected readonly breakpointEnum = BreakpointEnum;
  private readonly words: string[] = [
    ' Java, Spring Boot & Angular Enthusiast',
    ' Java Angular Fullstack Entwickler',
  ];
  private readonly maxLoops = 5;
  private isDeleting = false;
  private loopNum = 0;
  private typingSpeed = 100;

  private subscription?: Subscription;
  private readonly breakpointService = inject(BreakpointService);

  constructor() {
    this.subscription = this.breakpointService.activeBreakpoint$.subscribe(
      (breakpoint) => {
        this.currentBreakpoint = breakpoint;
      },
    );
  }

  ngOnInit(): void {
    this.typewrite();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private typewrite(): void {
    // Check if the maximum number of loops has been reached
    if (this.loopNum >= this.maxLoops) {
      this.displayText = this.words[0];
      return;
    }

    const current = this.loopNum % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.displayText = fullTxt.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = fullTxt.substring(0, this.displayText.length + 1);
    }

    let typeSpeed = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (!this.isDeleting && this.displayText === fullTxt) {
      typeSpeed = 1500; // break at the end
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.loopNum++;
      typeSpeed = 500; // break before starting
    }

    if (typeof window !== 'undefined') {
      requestAnimationFrame(() =>
        setTimeout(() => this.typewrite(), typeSpeed),
      );
    }
  }
}
