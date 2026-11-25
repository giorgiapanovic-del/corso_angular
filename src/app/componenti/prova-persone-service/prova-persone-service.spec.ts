import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvaPersoneService } from './prova-persone-service';

describe('ProvaPersoneService', () => {
  let component: ProvaPersoneService;
  let fixture: ComponentFixture<ProvaPersoneService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaPersoneService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProvaPersoneService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
