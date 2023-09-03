import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(key: string, value: string): void {
    if (!value) {
      this.removeItem(key);
      return;
    }

    window.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    const value = window.localStorage.getItem(key);
    return value ? value : "";
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
