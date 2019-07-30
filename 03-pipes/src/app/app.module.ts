import { BrowserModule } from '@angular/platform-browser';

// LOCALE_ID - Fechas español
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// localeEs, registerLocaleData - Fechas español
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

// Importar Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomSecure } from './pipes/dom-secure.pipe';
import { Password } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomSecure,
    Password
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // provide - Fechas español
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
