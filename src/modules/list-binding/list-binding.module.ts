import { Module } from '@nestjs/common';
import { ListBindingController } from './list-binding.controller';
import { ListBindingService } from './list-binding.service';

@Module({
  controllers: [ListBindingController],
  providers: [ListBindingService],
})
export class ListBindingModule {}
