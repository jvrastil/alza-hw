import { Component } from '@angular/core';
import { DisplayComponentEnum } from './state/models/ui.models';
import { select, Store } from '@ngrx/store';
import * as fromStore from './state';
import { HeroesApiService } from './services/heroes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alza-hw';

  selectedComponent: DisplayComponentEnum;
  DisplayComponentEnum: any = DisplayComponentEnum;

  constructor(private store: Store<fromStore.HeroesState>, private apiService: HeroesApiService) {
    store.pipe(select(fromStore.getOpenedComponent))
      .subscribe(val => this.selectedComponent = val);

    this.apiService.getHeroes();
  }
}
