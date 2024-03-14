import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { EnvModule } from './env/env.module'
import { RabbitMQModule } from './rabbitmq/rabbitmq.module'
import { envSchema } from './env/env'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    RabbitMQModule,
  ],
})
export class AppModule {}
