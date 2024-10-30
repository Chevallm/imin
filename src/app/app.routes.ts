import { Routes } from '@angular/router';
import { MatchesComponent } from './view/matches/matches.component';
import { MatchComponent } from './view/match/match.component';
import { CreateComponent } from './view/create/create.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/matches',
        pathMatch: 'full'
    },
    {
        path: 'matches',
        component: MatchesComponent,
        title: 'Matches'
    },
    {
        path: 'matches/:id',
        component: MatchComponent,
        title: 'Match'
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create Match'
    },
];
