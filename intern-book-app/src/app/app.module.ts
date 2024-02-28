import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { BooklistComponent } from './pages/booklist/booklist.component';

@NgModule({
declarations: [
  //  AppComponent,
],
declarations: [],
imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    BooklistComponent,
    AppComponent,

],
providers: [
    provideAnimationsAsync()
],
bootstrap: []
})
export class AppModule { }