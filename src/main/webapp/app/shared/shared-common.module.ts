import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
    PayServiceApplicationSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        PayServiceApplicationSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        PayServiceApplicationSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class PayServiceApplicationSharedCommonModule {}
