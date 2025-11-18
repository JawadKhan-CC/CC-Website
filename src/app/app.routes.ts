import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'partners',component:PartnersComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'services',component:ServiceComponent},
    {path:'technology',component:TechnologyComponent}
];
