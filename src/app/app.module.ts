import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MyBtnComponent } from './mybtn.component';
import {ButtonModule,TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, ButtonModule , TreeTableModule, SharedModule, HttpModule, JsonpModule],
  declarations: [ AppComponent, MyBtnComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 



}
