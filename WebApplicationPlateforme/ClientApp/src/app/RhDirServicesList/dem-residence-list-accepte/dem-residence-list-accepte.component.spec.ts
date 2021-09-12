import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemResidenceListAccepteComponent } from './dem-residence-list-accepte.component';

describe('DemResidenceListAccepteComponent', () => {
  let component: DemResidenceListAccepteComponent;
  let fixture: ComponentFixture<DemResidenceListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemResidenceListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemResidenceListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
