import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialog,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Investments } from './../../investment.model';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { PreviewInvestmentDetailsComponent } from '../preview-investment-details/preview-investment-details.component';
import moment from 'moment';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

export interface DialogData {
  id: number;
  action: string;
  investments: Investments;
}

@Component({
  selector: 'app-add-investment-details:not(c)',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-investment-details.component.html',
  styleUrl: './add-investment-details.component.scss',
})
export class AddInvestmentDetailsComponent {
  action: string;
  dialogTitle: string;
  investmentForm: UntypedFormGroup;
  investments: Investments;

  assetTypes = [
    {
      name: 'Real Estate',
      id: 'realEstate',
    },
    {
      name: 'Stocks',
      id: 'stocks',
    },
    {
      name: 'Large Cap',
      id: 'largeCap',
    },
    {
      name: 'Mid Cap',
      id: 'midCap',
    },
    {
      name: 'Small Cap',
      id: 'smallCap',
    },
    {
      name: 'Gold',
      id: 'gold',
    },
    {
      name: 'FD',
      id: 'FD',
    },
    {
      name: 'RD',
      id: 'RD',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<AddInvestmentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder,
    public dialog: MatDialog,
    public matSnackBar: MatSnackBar
  ) {
    // Set the defaults
    this.dialogTitle = 'Add Investment Detail';
    const blankObject = {} as Investments;
    this.investments = new Investments(blankObject);
    this.investmentForm = this.createContactForm();
  }

  formControl = new UntypedFormControl('', [Validators.required]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.investments.id],
      name: [this.investments.name],
      quantity: [this.investments.quantity],
      amount: [this.investments.amount],
      purDate: [this.investments.purDate],
    });
  }

  openPreviewInvestmentDialog(formData: Investments) {
    const dialogRef = this.dialog.open(PreviewInvestmentDetailsComponent, {
      data: {
        investments: formData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialogRef.close();
      }
    });
  }

  onNoClick(): void {
    this.matSnackBar.open('Investment Cancelled');
    this.dialogRef.close();
  }

  public confirmAdd() {
    const formValue = this.investmentForm.getRawValue();

    if (
      !formValue.name ||
      !formValue.quantity ||
      !formValue.amount ||
      !formValue.purDate
    ) {
      this.matSnackBar.open('Please enter all fields');
      return false;
    }
    formValue.purDate = moment(formValue.purDate).format('DD-MM-YYYY');
    this.openPreviewInvestmentDialog(formValue);
    console.log(formValue);
    return true;
  }
}
