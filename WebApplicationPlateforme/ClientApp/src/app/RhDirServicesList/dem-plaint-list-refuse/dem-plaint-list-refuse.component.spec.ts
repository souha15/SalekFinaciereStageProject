import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemPlaintListRefuseComponent } from './dem-plaint-list-refuse.component';

describe('DemPlaintListRefuseComponent', () => {
  let component: DemPlaintListRefuseComponent;
  let fixture: ComponentFixture<DemPlaintListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemPlaintListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemPlaintListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
