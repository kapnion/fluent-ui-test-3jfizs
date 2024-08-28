import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
