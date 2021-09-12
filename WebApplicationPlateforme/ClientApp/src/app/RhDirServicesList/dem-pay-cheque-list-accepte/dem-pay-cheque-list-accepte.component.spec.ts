import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemPayChequeListAccepteComponent } from './dem-pay-cheque-list-accepte.component';

describe('DemPayChequeListAccepteComponent', () => {
  let component: DemPayChequeListAccepteComponent;
  let fixture: ComponentFixture<DemPayChequeListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemPayChequeListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemPayChequeListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
