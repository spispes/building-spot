import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSpotHighlevelComponent } from './building-spot-highlevel.component';

describe('BuildingSpotHighlevelComponent', () => {
  let component: BuildingSpotHighlevelComponent;
  let fixture: ComponentFixture<BuildingSpotHighlevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingSpotHighlevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSpotHighlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
