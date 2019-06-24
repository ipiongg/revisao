import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';

const routes: Routes = [
  { path: 'estatistica', component: ProvaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
