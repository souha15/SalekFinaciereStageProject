import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemSalarialeListRefuseComponent } from './dem-salariale-list-refuse.component';

describe('DemSalarialeListRefuseComponent', () => {
  let component: DemSalarialeListRefuseComponent;
  let fixture: ComponentFixture<DemSalarialeListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemSalarialeListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemSalarialeListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
