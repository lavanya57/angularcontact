import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompComponent } from './comp/CompComponent';

const routes: Routes = [
  { path: 'comp', component: CompComponent},
  { path: '', redirectTo: '/comp', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
