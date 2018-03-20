import { Injectable } from '@angular/core';
import { Action, Controller } from '@framing/ng-core';

import { HomeModel as M } from './home.model';
import { HomeView as V } from './home.view';

@Injectable()
export class HomeController extends Controller<M, V> {
  @Action() myAction(): void {
    this.model.myProperty++;

    // <-- Implement your biznas logic
  }
}
