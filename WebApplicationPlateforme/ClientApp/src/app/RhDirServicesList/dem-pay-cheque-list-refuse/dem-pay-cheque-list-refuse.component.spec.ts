import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemPayChequeListRefuseComponent } from './dem-pay-cheque-list-refuse.component';

describe('DemPayChequeListRefuseComponent', () => {
  let component: DemPayChequeListRefuseComponent;
  let fixture: ComponentFixture<DemPayChequeListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemPayChequeListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemPayChequeListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
