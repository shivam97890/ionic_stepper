import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MatSelectModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatDividerModule,MatSidenavModule,MatIconModule,MatListModule,MatStepperModule,MatMenuModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MatSelectModule,
    FlexLayoutModule,
    MatStepperModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
