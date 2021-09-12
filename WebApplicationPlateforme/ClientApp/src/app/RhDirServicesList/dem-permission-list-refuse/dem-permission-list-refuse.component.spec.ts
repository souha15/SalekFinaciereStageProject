import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemPermissionListRefuseComponent } from './dem-permission-list-refuse.component';

describe('DemPermissionListRefuseComponent', () => {
  let component: DemPermissionListRefuseComponent;
  let fixture: ComponentFixture<DemPermissionListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemPermissionListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemPermissionListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
