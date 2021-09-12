import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemSalarialeListAccepteComponent } from './dem-salariale-list-accepte.component';

describe('DemSalarialeListAccepteComponent', () => {
  let component: DemSalarialeListAccepteComponent;
  let fixture: ComponentFixture<DemSalarialeListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemSalarialeListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemSalarialeListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
