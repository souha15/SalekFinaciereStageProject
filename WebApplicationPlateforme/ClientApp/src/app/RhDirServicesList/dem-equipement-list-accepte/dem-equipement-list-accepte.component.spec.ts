import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemEquipementListAccepteComponent } from './dem-equipement-list-accepte.component';

describe('DemEquipementListAccepteComponent', () => {
  let component: DemEquipementListAccepteComponent;
  let fixture: ComponentFixture<DemEquipementListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemEquipementListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemEquipementListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
