import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './persons/add/add.component';
import { DetailComponent } from './persons/detail/detail.component';
import { EditComponent } from './persons/edit/edit.component';
import { ListeComponent } from './persons/liste/liste.component';

const APP_ROUTING: Routes = [
  {path: 'liste', component: ListeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add', component: AddComponent},
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
