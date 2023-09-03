import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private avaliableSymbols: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  generate(stringLength: number): string {
    let generatedString = "";

    for (let stringCharacterIndex = 0; stringCharacterIndex < stringLength; stringCharacterIndex++) {
      const randomSymbolIndex = Math.floor(Math.random() * this.avaliableSymbols.length);
      generatedString += this.avaliableSymbols[randomSymbolIndex];
    }

    return generatedString;
  }
}

export const GeneratedStringToken = new InjectionToken<string>("GeneratedStringToken");
