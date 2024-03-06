import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BookService } from '../../service/book.service';
import { BookData } from '../../types/book';



@Component({
  standalone:true,
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  imports: [
    MatDialogActions,
    MatDialogClose, 
    MatDialogTitle, 
    MatDialogContent,
    MatButtonModule,
],

})
export class ConfirmDialogComponent {
  
  book=new BookData();

  constructor(private bookService:BookService , public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  deleteBook(book:any){
    this.bookService.deleteBook(book);
    
  }
}
