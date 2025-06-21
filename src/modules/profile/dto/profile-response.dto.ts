import { ApiProperty } from '@nestjs/swagger';

export class ProfileResponseDto {
  @ApiProperty({ example: 'ru', description: 'Язык пользователя' })
  lang: number;

  @ApiProperty({ example: 'e183b124-d1fe-56de-8504-b25b2281d872', description: 'Идентификатор устройства' })
  deviceId: string;
}
