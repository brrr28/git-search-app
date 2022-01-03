import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { BlocksComponent } from './components/blocks/blocks.component';
import { TableComponent } from './components/table/table.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlocksComponent,
    TableComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
