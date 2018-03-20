import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Framing } from '@framing/ng-core';

import { AppRootComponent } from './app-root/app-root.component';

@NgModule(Framing((framing) => framing
  .import(RouterModule)
  .declarationsAndEntryComponents([
    AppRootComponent,

    // <-- List your view components here
  ])
))
export class AppViewModule { }
