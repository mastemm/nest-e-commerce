import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Wx nrld!';
    
  }
  logicToSayGoodbye(): string {
    return 'Goodbye!';
    
  }
  

}
