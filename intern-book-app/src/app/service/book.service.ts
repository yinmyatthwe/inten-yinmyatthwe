import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from '../types/book';
import { BOOKS } from '../types/mock-books';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    books = BOOKS;
    message="string";
    constructor(private httpclient:HttpClient) { }

    getBook():Observable<Book[]>{
    const books = of(BOOKS);
    return books;
    }

    insertBook(bookData:any){
    this.books.push(bookData);
    return this.books;
    }

    deleteBook(bookData:any){
        this.books.pop();
        return this.books;
    }

}
