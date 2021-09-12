import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemExperienceListAccepteComponent } from './dem-experience-list-accepte.component';

describe('DemExperienceListAccepteComponent', () => {
  let component: DemExperienceListAccepteComponent;
  let fixture: ComponentFixture<DemExperienceListAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemExperienceListAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemExperienceListAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
