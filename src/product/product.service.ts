import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProduct(): string[] {
    return ["article 1","article 2","article 3"]
  }


}
