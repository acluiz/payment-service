import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://lwjuwfdp:yioROq3lEPbgUCc1aoBkhQRUMY7A6RsB@jackal.rmq.cloudamqp.com/lwjuwfdp',
      ],
      queue: 'payment',
    },
  });

  await app.listen(3000);
}

bootstrap();
