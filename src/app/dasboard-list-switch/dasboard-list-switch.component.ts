import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../state';
import { UiActions } from '../state';
import { DisplayComponentEnum } from '../state/models/ui.models';

@Component({
  selector: 'app-dasboard-list-switch',
  templateUrl: './dasboard-list-switch.component.html',
  styleUrls: ['./dasboard-list-switch.component.css'],
})
export class DasboardListSwitchComponent {

  selectedComponent: DisplayComponentEnum;
  DisplayComponentEnum: any = DisplayComponentEnum;

  constructor(private store: Store<fromStore.HeroesState>) {
    this.store.pipe(select(fromStore.getOpenedComponent))
      .subscribe(val => this.selectedComponent = val);
  }

  select(component: DisplayComponentEnum) {
    this.store.dispatch(new UiActions.OpenDasboardOrList(component));
  }
}
