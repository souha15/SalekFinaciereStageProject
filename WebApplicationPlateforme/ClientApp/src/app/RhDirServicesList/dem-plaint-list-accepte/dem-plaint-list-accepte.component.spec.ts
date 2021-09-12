import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemPlaintListAccepteComponent } from './dem-plaint-list-accepte.component';

describe('DemPlaintListAccepteComponent', () => {
  let component: DemPlaintListAccepteComponent;
  let fixture: ComponentFixture<DemPlaintListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemPlaintListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemPlaintListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
