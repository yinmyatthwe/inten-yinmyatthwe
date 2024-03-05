import { Component,Input } from '@angular/core';
import { BOOKS } from '../../types/mock-books';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { NgIf,NgFor } from '@angular/common';
import { BookService } from '../../service/book.service';
import { BookData } from '../../types/book';

@Component({
  standalone: true,
  selector: 'app-bookinformation',
  templateUrl: './bookinformation.component.html',
  styleUrl: './bookinformation.component.css',
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ToolbarComponent,
    NgIf,
    NgFor, 
  ],
})


export class BookinformationComponent {
  @Input() books=BOOKS;
  book=new BookData();
  constructor(private bookService:BookService){}
  
  deleteBook(book:any){
    if(confirm("「本名」を削除します。よろしいですか？　")){
      this.bookService.deleteBook(book);
      }
    
  }
}
