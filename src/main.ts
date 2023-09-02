import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ConstantsModel } from './app/core/models/constants.model';
import { ConstantsServiceToken } from './app/core/services/constants.service';

const defaultConstantsModel: ConstantsModel = {
  App: "Sus Shop",
  Version: "1.2.0",
  API_URL: "https://sus-shop.epam.ua"
}

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      { provide: ConstantsServiceToken, useValue: defaultConstantsModel }
    ]
})
  .catch(err => console.error(err));
