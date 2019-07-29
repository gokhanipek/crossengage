import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
        <div class="jumbotron mt-5 text-center">
            <h1 class="display-3">Welcome to CrossEngage Quiz Challange!</h1>
            <p class="lead">Test your memory by this totally random questions!</p>
            <hr class="my-4">
            <p>Challange your friends!</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="/quiz" role="button">Start</a>
            </p>
        </div>
  `,
})

export class HomeComponent {
    
}
