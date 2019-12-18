import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { CommitsComponent } from './commits/commits.component';

const commitsRoutes: Routes = [
  {
    path: 'commits',
    component: BaseComponent,
    children: [
        {
            path: '',
            component: CommitsComponent
        }
    ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(commitsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommitsRoutingModule { }