import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ConstantsModel } from './app/core/models/constants.model';
import { ConstantsServiceToken } from './app/core/services/constants.service';
import { GeneratedStringToken, GeneratorService } from './app/core/services/generator.service';
import { GeneratorFactory } from './app/core/services/generator.factory';
import { LocalStorageService } from './app/core/services/local-storage.service';

const defaultConstantsModel: ConstantsModel = {
  App: "Sus Shop",
  Version: "1.2.0",
  API_URL: "https://sus-shop.epam.ua"
}
const defaultLocalStorageService: LocalStorageService = new LocalStorageService();

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserModule),
      { provide: ConstantsServiceToken, useValue: defaultConstantsModel },
      { provide: GeneratedStringToken, useFactory: GeneratorFactory, deps: [GeneratorService] },
      { provide: LocalStorageService, useValue: defaultLocalStorageService }
    ]
})
  .catch(err => console.error(err));
