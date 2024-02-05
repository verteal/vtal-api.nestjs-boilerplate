import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { EnvModule } from './env/env.module'
import { EnvService } from './env/env.service'
import { RabbitMQModule } from './rabbitmq/rabbitmq.module'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './env/env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: (envService: EnvService) => ({
        type: 'postgres',
        port: envService.get('DATABASE_PORT'),
        username: envService.get('DATABASE_USERNAME'),
        password: envService.get('DATABASE_PASSWORD'),
        database: envService.get('DATABASE_NAME'),
        entities: [],
        synchronize: true,
        logging: true,
      }),
    }),
    EnvModule,
    RabbitMQModule,
  ],
})
export class AppModule {}
