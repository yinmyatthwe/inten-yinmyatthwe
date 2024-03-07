import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../types/book';
import { BOOKS } from '../types/mock-books';
import { MessageService } from './message.service';


@Injectable({
    providedIn: 'root'
})
export class BookService {
    books = BOOKS;
    message="string";
    constructor(private httpclient:HttpClient,
                private messageService:MessageService) { }

    getBook():Observable<Book[]>{
    const books = of(BOOKS);
    this.messageService.add('Fetched Books');
    return books;
    }

    insertBook(bookData:any){
    this.books.push(bookData);
    this.messageService.add('Added New Book');
    return this.books;
    }

    deleteBook(bookData:any){
        this.books.pop();
        this.messageService.add('Deleted Book');
        return this.books;
    }

}
