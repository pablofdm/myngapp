import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiInterfaceComponent } from './ui-interface.component';

describe('UiInterfaceComponent', () => {
  let component: UiInterfaceComponent;
  let fixture: ComponentFixture<UiInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInterfaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
