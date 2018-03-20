import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HomeComponent } from '../../home.component';

@Component({
  selector: 'home-root',
  templateUrl: './home-root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRootComponent extends HomeComponent {}
