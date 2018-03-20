import { Injectable } from '@angular/core';
import { Action, Controller } from '@framing/ng-core';

import { AppModel as M } from './app.model';
import { AppView as V } from './app.view';

@Injectable()
export class AppController extends Controller<M, V> {
  @Action('My Action') myAction(): void {
    this.model.myProperty++;

    // <-- Implement your biznas logic
  }
}
