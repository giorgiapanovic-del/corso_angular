import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'contact/:id', component: Contact}
];
