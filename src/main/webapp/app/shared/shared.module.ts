import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    PayServiceApplicationSharedLibsModule,
    PayServiceApplicationSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

@NgModule({
    imports: [
        PayServiceApplicationSharedLibsModule,
        PayServiceApplicationSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        PayServiceApplicationSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PayServiceApplicationSharedModule {}
