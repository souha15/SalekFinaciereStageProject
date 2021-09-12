import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemFormationListRefuseComponent } from './dem-formation-list-refuse.component';

describe('DemFormationListRefuseComponent', () => {
  let component: DemFormationListRefuseComponent;
  let fixture: ComponentFixture<DemFormationListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemFormationListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemFormationListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
