import { adminRoutes } from './admin.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
    DashboardComponent
  ],
    imports: [CommonModule, RouterModule.forChild(adminRoutes)],
})
export class AdminModule {}
