import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent
    },
    {
        path: "home",
        component: DashboardComponent
    },
    {
        path: "investment-detail",
        component: InvestmentDetailsComponent
    }
];
