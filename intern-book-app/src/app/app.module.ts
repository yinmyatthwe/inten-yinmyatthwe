import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BooklistComponent } from './pages/booklist/booklist.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';


const routes:Routes=[
    {path:'',component:BooklistComponent}
];
@NgModule({
declarations: [
    AppComponent,
],
imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    BooklistComponent,
    ToolbarComponent,
    HttpClientModule,
    RouterModule.forRoot(routes),

],
providers: [
    provideAnimationsAsync()
],
bootstrap: [AppComponent]
})
export class AppModule { }
