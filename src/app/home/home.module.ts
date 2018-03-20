import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { HomeFeature } from '../../features/home/home.feature';

@NgModule(Framing((framing) => framing
  .use(new HomeFeature())
))
export class HomeModule { }
