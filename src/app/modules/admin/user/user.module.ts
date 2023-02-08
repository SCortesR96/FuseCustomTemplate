import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routing';

@NgModule({
    declarations: [UsersComponent, ProfileComponent],
    imports: [CommonModule, RouterModule.forChild(userRoutes)],
})
export class UserModule {}
