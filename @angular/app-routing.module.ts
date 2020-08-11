import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: '', redirectTo:"home",pathMatch:"full" },
  { path: '', component: Layout1Component,children:[
    { path: 'home', loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule) },
    { path: 'guitars', loadChildren:()=>import('./pages/guitars/guitars.module').then(m=>m.GuitarsModule) },
    { path: 'bass', loadChildren:()=>import('./pages/bass/bass.module').then(m=>m.BassModule) },
    { path: 'contact', loadChildren:()=>import('./pages/contact/contact.module').then(m=>m.ContactModule) },
  ] },
];

@NgModule({
  declarations:[
    Layout1Component,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
