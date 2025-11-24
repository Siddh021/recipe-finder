import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeQuestion: number = 0;

  toggleQuestion(questionNumber: number) {
    if (this.activeQuestion === questionNumber) {
      this.activeQuestion = 0; 
    } else {
      this.activeQuestion = questionNumber; 
    }
  }
}