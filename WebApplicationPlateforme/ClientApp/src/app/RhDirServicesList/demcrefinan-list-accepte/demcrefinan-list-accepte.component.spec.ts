import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemcrefinanListAccepteComponent } from './demcrefinan-list-accepte.component';

describe('DemcrefinanListAccepteComponent', () => {
  let component: DemcrefinanListAccepteComponent;
  let fixture: ComponentFixture<DemcrefinanListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemcrefinanListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemcrefinanListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
