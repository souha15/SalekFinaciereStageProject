import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemDemissionListAccepteComponent } from './dem-demission-list-accepte.component';

describe('DemDemissionListAccepteComponent', () => {
  let component: DemDemissionListAccepteComponent;
  let fixture: ComponentFixture<DemDemissionListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemDemissionListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemDemissionListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
