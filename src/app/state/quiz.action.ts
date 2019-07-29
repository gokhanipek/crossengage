export class GetQuestion {
  static readonly type = '[Quiz] Get question';
  static readonly desc = 'get one question';
}


export class GetAnswers {
  static readonly type = '[Quiz] Get answers';
  static readonly desc = 'get answers';
  constructor(public payload: any){}
}
