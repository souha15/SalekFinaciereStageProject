import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemRecrutementListAccepteComponent } from './dem-recrutement-list-accepte.component';

describe('DemRecrutementListAccepteComponent', () => {
  let component: DemRecrutementListAccepteComponent;
  let fixture: ComponentFixture<DemRecrutementListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemRecrutementListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemRecrutementListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
