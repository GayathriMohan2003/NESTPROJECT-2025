import { Routes } from '@angular/router';
import { Customerlist } from './customerlist/customerlist';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'customerlist',component:Customerlist},
    {path:'',component:Home}
    
];
