import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    NgForOf
  ],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) entries!: string[];
}
