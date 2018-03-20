import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { AppController as C } from './app.controller';
import { AppModel as M } from './app.model';
import { AppView as V } from './app.view';

import { AppRootComponent } from './view/app-root/app-root.component';
import { AppViewModule } from './view/view.module';

export class AppFeature extends Framer<M, V> {
  public get defaultModel(): M {
    return {
      myProperty: 0,
    };
  }

  public get defaultView(): V {
    return {
      appRoot: AppRootComponent,
    };
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(AppViewModule)
      .root(this.theView.appRoot);
  }

  // ========================================
  // internal framing methods (don't touch!)
  // ========================================

  public get framerName(): string { return 'App'; }

  public get defaultController(): Type<C> { return C; }
}
