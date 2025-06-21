import { Module } from '@nestjs/common';
import { ListBindingModule } from './modules/list-binding/list-binding.module';
import { ProfileModule } from './modules/profile/profile.module';
import { UrlValidationModule } from './modules/url-validation/url-validation.module';

@Module({
  imports: [ListBindingModule, ProfileModule, UrlValidationModule],
})
export class AppModule {}
