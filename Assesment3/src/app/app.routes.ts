import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Cloud } from './pages/cloud/cloud';
import { Cyber } from './pages/cyber/cyber';
import { Devops } from './pages/devops/devops';
import { Gis } from './pages/gis/gis';
import { Contact } from './pages/contact/contact';
import { Home } from './home/home';

export const routes: Routes = [
    {path:"about",component:About},
    {path:"services",component:Services},
    {path:"cloud",component:Cloud},
    {path:"cyber",component:Cyber},
    {path:"devops",component:Devops},
    {path:"gis",component:Gis},
    {path:"contact",component:Contact},
    {path:"",component:Home}

];
