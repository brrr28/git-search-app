import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
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
    path: 'login',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'login',
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