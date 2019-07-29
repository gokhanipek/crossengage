import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuizState } from './state/quiz.state';
import { GetQuestion, GetAnswers } from './state/quiz.action';
import { Question } from './state/quiz.model';
import { map } from 'rxjs/operators';

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
    const category: any = this.question$.pipe(map( val => val.category ));
    console.warn(category)
    this.store.dispatch(new GetAnswers(category))
    this.question$.subscribe(console.warn)
  }

  get categories$(): Observable<string>{
    return this.question$.pipe(map(val => val.category))
  }
}
