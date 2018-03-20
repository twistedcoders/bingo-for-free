import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { AppController as C } from './app.controller';
import { AppModel as M } from './app.model';
import { AppView as V } from './app.view';

@AngularComponent({})
export class AppComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
