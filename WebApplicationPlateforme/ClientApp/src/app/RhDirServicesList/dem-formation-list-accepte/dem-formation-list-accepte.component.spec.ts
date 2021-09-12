import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemFormationListAccepteComponent } from './dem-formation-list-accepte.component';

describe('DemFormationListAccepteComponent', () => {
  let component: DemFormationListAccepteComponent;
  let fixture: ComponentFixture<DemFormationListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemFormationListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemFormationListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
