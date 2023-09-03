import { Injectable, InjectionToken } from '@angular/core';
import { generateNewId } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private avaliableSymbols: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  private newIdGenerator: Generator<number> = generateNewId();

  generate(stringLength: number): string {
    let generatedString = "";

    for (let stringCharacterIndex = 0; stringCharacterIndex < stringLength; stringCharacterIndex++) {
      const randomSymbolIndex = Math.floor(Math.random() * this.avaliableSymbols.length);
      generatedString += this.avaliableSymbols[randomSymbolIndex];
    }

    return generatedString;
  }

  getNewId(): number {
    return this.newIdGenerator.next().value;
  }
}

export const GeneratedStringToken = new InjectionToken<string>("GeneratedStringToken");
