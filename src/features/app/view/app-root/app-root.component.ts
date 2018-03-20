import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRootComponent extends AppComponent {}
