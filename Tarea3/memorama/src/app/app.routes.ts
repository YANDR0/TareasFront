import { Routes } from '@angular/router';
import { CardsComponent } from './component/cards/cards.component';
import { RetryComponent } from './component/retry/retry.component';
import { FoundntComponent } from './component/foundnt/foundnt.component';

export const routes: Routes = [
    { path: '', component: CardsComponent},
    { path: 'retry', component: RetryComponent},
    { path: '**', component: FoundntComponent}
];
