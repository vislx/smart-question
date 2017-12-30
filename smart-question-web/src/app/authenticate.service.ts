import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {
  
  public token: string;
  public access_code: string;

  constructor() { }
  
  public tester_login(accessCode: string) {
    
    this.access_code = accessCode;
    
    let key = Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7);
    
    this.token = key.toUpperCase();
    return true;
  }
  
  public admin_login(accessCode: string) {
    
    let key = Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7);
    
    this.token = key.toUpperCase();
    return true;
  }

}
