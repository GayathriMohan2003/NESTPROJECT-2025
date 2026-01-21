import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { About } from './about/about';
import { SavedJobsComponent } from './saved-jobs/saved-jobs';
import { Home } from './home/home';
import { JobDetailsComponent } from './job-details/job-details';
import { JobsComponent } from './jobs/jobs';

export const routes: Routes = [
    {path:'about',component:About},
    {path:'saved-jobs',component:SavedJobsComponent},
    {path:'',component:Home},
    {path:'job-details',component:JobDetailsComponent},
    {path:'jobs',component:JobsComponent}
];