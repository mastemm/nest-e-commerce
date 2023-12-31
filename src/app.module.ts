import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ProductModule, UsersModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, PrismaService],
})
export class AppModule {}
