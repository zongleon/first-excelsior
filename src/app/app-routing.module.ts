import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HelpdeskComponent } from './views/helpdesk/helpdesk.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'helpdesk', component: HelpdeskComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
