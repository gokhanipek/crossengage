import {State, Action, StateContext, Selector} from '@ngxs/store';
import { QuizService } from './quiz.service';
import { GetQuestion, GetAnswers } from './quiz.action';
import {tap} from 'rxjs/operators';
import { Question } from './quiz.model';


export class QuestionStateModel {
    question: Question;
    answers: any;
}

@State<QuestionStateModel>({
    name: 'question',
})
export class QuizState {

    constructor(private quizService: QuizService) {
    }

    @Selector()
    static getQuestion(state: QuestionStateModel) {
        return state.question;
    }

    @Action(GetQuestion)
    getQuestion({getState, setState}: StateContext<QuestionStateModel>) {
        return this.quizService.getQuestion().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                question: result,
            });
        }));
    }

    @Selector()
    static getAnswers(state:QuestionStateModel){
      return state.answers;
    }

    @Action(GetAnswers)
    getAnswers({getState, setState}: StateContext<QuestionStateModel>, category: string) {
        return this.quizService.getQuestion().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                answers: category,
            });
        }));
    }
  }
