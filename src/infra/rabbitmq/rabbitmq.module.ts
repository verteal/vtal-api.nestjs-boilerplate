import { RabbitMQModule as PrimitiveRabbitMQModule } from '@golevelup/nestjs-rabbitmq'
import { Global, Module } from '@nestjs/common'

import { EnvModule } from '../env/env.module'
import { EnvService } from '../env/env.service'

@Global()
@Module({
  imports: [
    PrimitiveRabbitMQModule.forRootAsync(PrimitiveRabbitMQModule, {
      imports: [EnvModule],
      inject: [EnvService],
      useFactory: async (envService: EnvService) => ({
        uri: envService.get('RABBITMQ_URI'),
      }),
    }),
  ],
  exports: [PrimitiveRabbitMQModule],
})
export class RabbitMQModule {}
