import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemRecrutementListRefuseComponent } from './dem-recrutement-list-refuse.component';

describe('DemRecrutementListRefuseComponent', () => {
  let component: DemRecrutementListRefuseComponent;
  let fixture: ComponentFixture<DemRecrutementListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemRecrutementListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemRecrutementListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
