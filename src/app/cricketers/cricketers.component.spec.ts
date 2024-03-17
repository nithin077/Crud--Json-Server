import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketersComponent } from './cricketers.component';

describe('CricketersComponent', () => {
  let component: CricketersComponent;
  let fixture: ComponentFixture<CricketersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketersComponent]
    });
    fixture = TestBed.createComponent(CricketersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
