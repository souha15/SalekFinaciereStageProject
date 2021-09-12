import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemCongeListRefuseComponent } from './dem-conge-list-refuse.component';

describe('DemCongeListRefuseComponent', () => {
  let component: DemCongeListRefuseComponent;
  let fixture: ComponentFixture<DemCongeListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemCongeListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemCongeListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
