import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooklistComponent } from './pages/booklist/booklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    RouterOutlet,
    BooklistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intern-book-app';
}
