import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemcrefinanListRefuseComponent } from './demcrefinan-list-refuse.component';

describe('DemcrefinanListRefuseComponent', () => {
  let component: DemcrefinanListRefuseComponent;
  let fixture: ComponentFixture<DemcrefinanListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemcrefinanListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemcrefinanListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
