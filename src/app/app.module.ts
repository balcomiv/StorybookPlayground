import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './tutorial-components/todd-motto/content-projection/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
