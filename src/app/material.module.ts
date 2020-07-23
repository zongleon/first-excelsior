import {NgModule} from '@angular/core';
import {MdcButtonModule} from '@angular-mdc/web/button';
import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';
import {MdcIconModule} from '@angular-mdc/web/icon'
import {MdcDrawerModule} from '@angular-mdc/web/drawer';
import {MdcListModule} from '@angular-mdc/web/list';
import {MdcCardModule} from '@angular-mdc/web/card';

@NgModule({
  exports: [
    MdcTopAppBarModule,
    MdcButtonModule,
    MdcTopAppBarModule,
    MdcIconModule,
    MdcDrawerModule,
    MdcListModule,
    MdcCardModule
  ]
})
export class MaterialModule {}