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
import moment from 'moment';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

export interface DialogData {
  id: number;
  action: string;
  investments: Investments;
}

@Component({
  selector: 'app-preview-investment-details:not(c)',
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
  templateUrl: './preview-investment-details.component.html',
  styleUrl: './preview-investment-details.component.scss',
})
export class PreviewInvestmentDetailsComponent {
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
    public dialogRef: MatDialogRef<PreviewInvestmentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: UntypedFormBuilder,
    public dialog: MatDialog,
    public matSnackBar: MatSnackBar
  ) {
    // Set the defaults
    this.dialogTitle = 'Preview';
    this.investments = data.investments;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.matSnackBar.open('Investment Added Successfully');
    this.dialogRef.close(true);
  }
}
