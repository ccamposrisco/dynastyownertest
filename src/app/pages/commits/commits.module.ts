import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommitsComponent } from './commits/commits.component';
import { BaseComponent } from './base/base.component';
import { MybuttonComponent } from '../../components/mybutton/mybutton.component';
import { MyinputComponent } from '../../components/myinput/myinput.component';
import { CommitsRoutingModule } from './commits-routing.module';
​
@NgModule({
	declarations: [
		BaseComponent,
		CommitsComponent,
		MybuttonComponent,
		MyinputComponent
	],
	imports: [
		CommonModule,
		CommitsRoutingModule
	],
})
​
export class CommitsModule { }