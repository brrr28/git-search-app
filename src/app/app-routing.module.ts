import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { UserCardComponent } from './components/user-card/user-card.component';

const routes: Routes = [
  {
    path: 'blocks',
    component: BlocksComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'blocks/:login',
    component: UserCardComponent
  },
  {
    path: 'table/:login',
    component: UserCardComponent
  },
  {
    path: '**',
    redirectTo: 'blocks',
  }
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule { }