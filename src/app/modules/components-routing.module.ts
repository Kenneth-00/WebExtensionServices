import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { JesComponent } from '../components/jes/jes.component';
import { PartLinkComponent } from '../components/part-link/part-link.component';
import { ResAgenComponent } from '../components/res-agen/res-agen.component';
import { RnaComponent } from '../components/rna/rna.component';
import { MainComponent } from '../components/main/main.component';

const routes: Routes = [
  {
    path:'', 
    component:MainComponent,
    children:
    [
      {
        path:'home', 
        component:HomeComponent
      },
      {
        path:'research-agenda', 
        component:ResAgenComponent
      },
      {
        path:'journals', 
        component:JesComponent
      },
      {
        path:'news-and-announcements', 
        component:RnaComponent
      },
      {
        path:'partnership-and-linkage', 
        component:PartLinkComponent
      },
      {
        path:'',
        redirectTo:'/main',
        pathMatch:'full'
      }
    ]
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
