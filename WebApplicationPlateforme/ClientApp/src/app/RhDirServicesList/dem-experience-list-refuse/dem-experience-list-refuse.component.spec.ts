import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemExperienceListRefuseComponent } from './dem-experience-list-refuse.component';

describe('DemExperienceListRefuseComponent', () => {
  let component: DemExperienceListRefuseComponent;
  let fixture: ComponentFixture<DemExperienceListRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemExperienceListRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemExperienceListRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
