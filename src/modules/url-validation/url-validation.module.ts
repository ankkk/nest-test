import { Module } from '@nestjs/common';
import { UrlValidationController } from './url-validation.controller';

@Module({
  controllers: [UrlValidationController],
})
export class UrlValidationModule {}
