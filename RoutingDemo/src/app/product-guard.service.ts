import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate{

  constructor() { }

  canActivate(): boolean {    
    return true;     
}
}
