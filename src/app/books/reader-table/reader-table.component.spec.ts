import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderTableComponent } from './reader-table.component';

describe('Reader.TableComponent', () => {
  let component: ReaderTableComponent;
  let fixture: ComponentFixture<ReaderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
