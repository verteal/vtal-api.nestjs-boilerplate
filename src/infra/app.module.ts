import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'

import { EnvModule } from './env/env.module'
import { RabbitMQModule } from './rabbitmq/rabbitmq.module'
import { envSchema } from './env/env'
import { ResponseInterceptor } from './web/interceptors/response.interceptor'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    RabbitMQModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
