import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemDemissionListRefuseComponent } from './dem-demission-list-refuse.component';

describe('DemDemissionListRefuseComponent', () => {
  let component: DemDemissionListRefuseComponent;
  let fixture: ComponentFixture<DemDemissionListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemDemissionListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemDemissionListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
