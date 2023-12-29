import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent implements OnInit {
  words: string[] = [
    'Und ein Java, Spring Boot & Angular Enthusiast',
    'Und ein Java Angular Fullstack Entwickler',
  ];
  displayText = '';
  private isDeleting = false;
  private loopNum = 0;
  private typingSpeed = 90;
  private maxLoops = 5;

  ngOnInit(): void {
    this.typewrite();
  }

  private typewrite(): void {
    // Überprüfen, ob die maximale Anzahl von Durchläufen erreicht ist
    if (this.loopNum >= this.maxLoops) {
      this.displayText = this.words[0]; // Ersten String anzeigen
      return; // Beendet die Methode, um weitere Animationen zu verhindern
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
      typeSpeed = 500; // Pause am Ende
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.loopNum++;
      typeSpeed = 500; // Pause vor dem Start
    }

    if (typeof window !== 'undefined') {
      requestAnimationFrame(() =>
        setTimeout(() => this.typewrite(), typeSpeed),
      );
    }
  }
}
