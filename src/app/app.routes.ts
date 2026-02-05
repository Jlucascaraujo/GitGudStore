import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { TestPage } from './test-page/test-page';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login},
    { path: 'test-page', component: TestPage},
    { path: '**', redirectTo: ''}
];
