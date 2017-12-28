import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {

  constructor() { }
  
  public tester_login(accessCode: string) {
    
    let key = Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7);
    
    key = key.toUpperCase();
    return {
      success: true,
      key: key,
      id: accessCode
    };
  }
  
  public admin_login(accessCode: string) {
    
    let key = Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7)
      + Math.random().toString(36).substring(7);
    
    key = key.toUpperCase();
    return {
      success: true,
      key: key,
      id: accessCode
    };
  }

}
