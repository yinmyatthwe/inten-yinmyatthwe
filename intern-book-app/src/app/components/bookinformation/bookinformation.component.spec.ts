import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinformationComponent } from './bookinformation.component';

describe('BookinformationComponent', () => {
  let component: BookinformationComponent;
  let fixture: ComponentFixture<BookinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookinformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
