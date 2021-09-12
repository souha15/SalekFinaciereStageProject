import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemCongeListAccepteComponent } from './dem-conge-list-accepte.component';

describe('DemCongeListAccepteComponent', () => {
  let component: DemCongeListAccepteComponent;
  let fixture: ComponentFixture<DemCongeListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemCongeListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemCongeListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
