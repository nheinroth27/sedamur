import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosComponent } from './casos.component';

describe('CasosComponent', () => {
  let component: CasosComponent;
  let fixture: ComponentFixture<CasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
