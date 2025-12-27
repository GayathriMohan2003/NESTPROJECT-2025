import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Home } from './home/home';
import { SingleviewList } from './singleview-list/singleview-list';

export const routes: Routes = [
    {path:'product',component:Product},
    {path:'',component:Home},
    {path:'singleview-list/:titleid',component:SingleviewList}
];

