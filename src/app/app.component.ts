import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuizState } from './state/quiz.state';
import { GetQuestion, GetAnswers } from './state/quiz.action';
import { Question } from './state/quiz.model';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crossengage';

  @Select(QuizState.getQuestion)
  question$: Observable<Question>

  @Select(QuizState.getAnswers)
  answers$: Observable<any>

  constructor(private store: Store){
    this.store.dispatch(new GetQuestion());
  }



  ngOnInit(){
    // this.store.dispatch(new GetAnswers(this.category))
    console.log(this.category)
  }

  get category(): string{
    const category = this.store.selectSnapshot(QuizState.getQuestion).category as any
    return category;
  }
}
