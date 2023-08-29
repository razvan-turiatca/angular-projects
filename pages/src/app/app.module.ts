import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { CollectionsHomeComponent } from './collections/collections-home/collections-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    TimesDirective,
    CollectionsHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
