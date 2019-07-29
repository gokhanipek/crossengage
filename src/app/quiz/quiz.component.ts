import { Component, OnInit } from '@angular/core';
import { Select, Store, ofActionDispatched, ofActionCompleted } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuizState } from './../state/quiz.state';
import { GetQuestion, GetAnswers } from './../state/quiz.action';
import { Question } from './../state/quiz.model';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


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
  answers$: Observable<any>

  @Select(QuizState.getCategory)
  category$: Observable<string>

  constructor(private store: Store, private formBuilder: FormBuilder){
    this.store.dispatch(new GetQuestion());
    // this.store.dispatch(new GetAnswers('PIRATES'))
    this.answers$.subscribe(answers => this.answers = answers);
    this.question$.subscribe(val => this.question = val);
  }



  ngOnInit(){
    this.category$.subscribe(val => 
      this.store.dispatch(new GetAnswers(val))
    )

  }
}
