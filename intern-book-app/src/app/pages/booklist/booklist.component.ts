import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookinformationComponent } from '../../components/bookinformation/bookinformation.component';
import { BookService } from '../../service/book.service';
import { BookData } from '../../types/book';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ToolbarComponent,
    BookinformationComponent,
    NgIf,
    NgFor,
    FormsModule, 
  ],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent implements OnInit{
  books:any;
  book=new BookData();
  constructor(private bookService:BookService){}
  ngOnInit(){
    this.getBook();
  }
  
  getBook():void{
    this.bookService.getBook().subscribe(books=>this.books=books);
  }

  insertBook(){
    if(this.book.name!=null)
    { 
      this.bookService.insertBook(this.book);
      this.book=new BookData();    
    }
  }
}
