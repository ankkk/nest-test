import { ApiProperty } from '@nestjs/swagger';

export class UrlValidationResponseDto {
  @ApiProperty({ example: true, description: 'Успешный или неуспешный ответ' })
  ok: boolean;
}
