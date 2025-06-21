import { Body, Controller, Post } from '@nestjs/common';
import { UrlValidationDto } from './dto/url-validation.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UrlValidationResponseDto } from './dto/url-validation-response.dto';

@ApiTags('Проверка URL-адресов')
@Controller('url-validation')
export class UrlValidationController {
  @Post()
  @ApiOkResponse({ type: UrlValidationResponseDto, description: 'Результат проверки URL-адреса' })
  @ApiBadRequestResponse({ example: { ok: false }, description: 'Некорректный URL-адрес или неразрешенный источник' })
  validateUrl(@Body() dto: UrlValidationDto) {
    return { ok: true } as UrlValidationResponseDto;
  }
}
