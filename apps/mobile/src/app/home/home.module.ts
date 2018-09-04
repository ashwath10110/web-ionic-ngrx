import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import { DemoCoreModule } from '@ngrx-demo/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DemoCoreModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
