import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemPermissionListAccepteComponent } from './dem-permission-list-accepte.component';

describe('DemPermissionListAccepteComponent', () => {
  let component: DemPermissionListAccepteComponent;
  let fixture: ComponentFixture<DemPermissionListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemPermissionListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemPermissionListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
