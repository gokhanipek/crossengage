import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Question } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {

  constructor(private http: HttpClient) {
  }

  getQuestion() {
      return this.http.get<Question>('https://us-central1-quizengage.cloudfunctions.net/getRandomQuestion');
  }

  getAnswers(category: string){
    return this.http.get<any>(`https://us-central1-quizengage.cloudfunctions.net/getAnswers?cat=${category}`);
  }
}
