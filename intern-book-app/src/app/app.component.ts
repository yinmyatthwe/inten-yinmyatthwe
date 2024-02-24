import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooklistComponent } from './pages/booklist/booklist.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    BooklistComponent,
    ToolbarComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intern-book-app';
}
