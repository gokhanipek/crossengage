import { Component, OnInit } from '@angular/core';
import { Select, Store, ofActionDispatched, ofActionCompleted } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuizState } from './../state/quiz.state';
import { GetQuestion, GetAnswers } from './../state/quiz.action';
import { Question, Answers } from './../state/quiz.model';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { filter, take, scan, reduce } from 'rxjs/operators';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})

export class QuizComponent implements OnInit {

  public question: {};
  public answers: string[];

  @Select(QuizState.getQuestion)
  question$: Observable<Question>

  @Select(QuizState.getAnswers)
  answers$: Observable<string[]>

  @Select(QuizState.getCategory)
  category$: Observable<string>

  constructor(private store: Store){
    this.store.dispatch(new GetQuestion());
    // this.answers$.subscribe(answers => this.answers = answers);
    this.question$.subscribe(val => this.question = val);
    this.answers$.pipe(reduce( (acc, cur) => [...acc, cur.length < 4],[] )).subscribe(console.warn)

    // .subscribe(answers => {
    //   this.answers = answers;
    //   console.warn(this.answers);
    // });
  }



  ngOnInit(){
    this.category$.subscribe(val =>
      this.store.dispatch(new GetAnswers(val))
    )

  }
}
