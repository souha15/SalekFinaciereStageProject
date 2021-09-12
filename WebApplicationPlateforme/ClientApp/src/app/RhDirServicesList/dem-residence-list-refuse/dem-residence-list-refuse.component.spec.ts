import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemResidenceListRefuseComponent } from './dem-residence-list-refuse.component';

describe('DemResidenceListRefuseComponent', () => {
  let component: DemResidenceListRefuseComponent;
  let fixture: ComponentFixture<DemResidenceListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemResidenceListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemResidenceListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
