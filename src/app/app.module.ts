import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { AppFeature } from '../features/app/app.feature';

@NgModule(Framing((framing) => framing
  .use(new AppFeature())
  .children([
    { path: '', loadChildren: './home/home.module#HomeModule' },
  ])
))
export class AppModule { }
