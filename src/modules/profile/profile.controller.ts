import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AcceptLanguage } from './decorators/accept-language.decorator';
import { DeviceId } from './decorators/device-id.decorator';
import { ProfileResponseDto } from './dto/profile-response.dto';

@ApiTags('Пользовательские декораторы AcceptLanguage и DeviceId')
@Controller('profile')
export class ProfileController {
  @Get()
  @ApiOkResponse({ type: ProfileResponseDto, description: 'Результат для lang и deviceId' })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'Язык пользователя, например, ru',
  })
  @ApiHeader({
    name: 'X-Device-Id',
    description: 'Идентификатор устройства, например, e183b124-d1fe-56de-8504-b25b2281d872',
  })
  getProfile(@AcceptLanguage() lang: string, @DeviceId() deviceId: string) {
    return {
      lang,
      deviceId,
    };
  }
}
