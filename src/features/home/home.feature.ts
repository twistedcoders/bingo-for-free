import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { HomeController as C } from './home.controller';
import { HomeModel as M } from './home.model';
import { HomeView as V } from './home.view';

import { HomeRootComponent } from './view/home-root/home-root.component';
import { HomeViewModule } from './view/view.module';

export class HomeFeature extends Framer<M, V> {
  public get defaultModel(): M {
    return {
      myProperty: 0,
    };
  }

  public get defaultView(): V {
    return {
      homeRoot: HomeRootComponent,
    };
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(HomeViewModule)
      .component(this.theView.homeRoot);
  }

  // ========================================
  // internal framing methods (don't touch!)
  // ========================================

  public get framerName(): string { return 'Home'; }

  public get defaultController(): Type<C> { return C; }
}
