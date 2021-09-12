import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemEquipementListRefuseComponent } from './dem-equipement-list-refuse.component';

describe('DemEquipementListRefuseComponent', () => {
  let component: DemEquipementListRefuseComponent;
  let fixture: ComponentFixture<DemEquipementListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemEquipementListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemEquipementListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
