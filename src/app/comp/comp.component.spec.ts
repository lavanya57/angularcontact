import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompComponent } from './Comp/CompComponent';

describe('CompComponent', () => {
  let component: CompComponent;
  let fixture: ComponentFixture<CompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
