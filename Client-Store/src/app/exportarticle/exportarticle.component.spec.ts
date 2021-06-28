import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarticleComponent } from './exportarticle.component';

describe('ExportarticleComponent', () => {
  let component: ExportarticleComponent;
  let fixture: ComponentFixture<ExportarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
