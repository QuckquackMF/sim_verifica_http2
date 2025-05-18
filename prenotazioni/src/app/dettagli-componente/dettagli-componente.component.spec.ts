import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliComponenteComponent } from './dettagli-componente.component';

describe('DettagliComponenteComponent', () => {
  let component: DettagliComponenteComponent;
  let fixture: ComponentFixture<DettagliComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
