import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {
    //
  }

  public getItem(itemName: string): any {
    return JSON.parse(localStorage.getItem(itemName));
  }

  public isItemExist(itemName: string): boolean {
    return localStorage.getItem(itemName) !== null;
  }

  public setItem(itemName: string, data: any): void {
    localStorage.setItem(itemName, JSON.stringify(data));
  }
}
