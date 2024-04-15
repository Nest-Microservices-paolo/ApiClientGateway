import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVICE } from 'src/config';

console.log(envs);

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productMsHost,
          port: envs.productMsPort,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
