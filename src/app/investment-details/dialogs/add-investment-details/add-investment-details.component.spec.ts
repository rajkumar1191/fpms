import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestmentDetailsComponent } from './add-investment-details.component';

describe('AddInvestmentDetailsComponent', () => {
  let component: AddInvestmentDetailsComponent;
  let fixture: ComponentFixture<AddInvestmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvestmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInvestmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
