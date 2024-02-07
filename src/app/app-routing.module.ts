import { about } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { porto } from './porto/porto.component';
import { contact } from './contact/contact.component';

const routes: Routes = [
  {path:"about",component:about},
  {path:"portfolio",component:porto},
  {path:"contact",component:contact},
  {path:"contact",component:contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
