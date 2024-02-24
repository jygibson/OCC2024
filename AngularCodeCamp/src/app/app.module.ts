import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MadLibsComponent } from './mad-libs/mad-libs.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutModule, TabStripModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { JsParametersComponent } from './js-parameters/js-parameters.component';



const appRoutes: Routes = [
  { path: 'madLibs',   component: MadLibsComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    MadLibsComponent,
    JsParametersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {
        onSameUrlNavigation: 'reload',
        enableTracing: false
      }
    ),
    InputsModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    TabStripModule,
    LabelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
