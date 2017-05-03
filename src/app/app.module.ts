import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ButtonModule,TreeTableModule,TreeNode,SharedModule} from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule, ButtonModule , TreeTableModule, SharedModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
