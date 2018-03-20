import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { HomeRootComponent } from './home-root/home-root.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    HomeRootComponent,

    // <-- List your view components here
  ])
))
export class HomeViewModule { }
