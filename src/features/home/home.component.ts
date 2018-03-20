import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { HomeController as C } from './home.controller';
import { HomeModel as M } from './home.model';
import { HomeView as V } from './home.view';

@AngularComponent({})
export class HomeComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
