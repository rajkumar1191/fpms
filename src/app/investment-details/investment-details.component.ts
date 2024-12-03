import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { INVESTMENT_DATA } from './../dashboard/data-series';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddInvestmentDetailsComponent } from './dialogs/add-investment-details/add-investment-details.component';

@Component({
  selector: 'app-investment-details',
  standalone: true,
  imports: [
    MatTableModule,
    DatePipe,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './investment-details.component.html',
  styleUrl: './investment-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvestmentDetailsComponent {
  displayedColumns: string[] = ['name', 'date', 'amount', 'status'];
  dataSource = INVESTMENT_DATA;
  constructor(public dialog: MatDialog) {}
  openAddInvestmentDialog() {
    const dialogRef = this.dialog.open(AddInvestmentDetailsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
