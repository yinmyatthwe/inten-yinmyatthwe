import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { BOOKS } from '../../types/mock-books';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ToolbarComponent,
    NgIf,
    NgFor,
    FormsModule, 
  ],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  books=BOOKS;
}


