import { IsAllowedOrigin } from '../decorators/is-allowed-origin';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UrlValidationDto {
  @ApiProperty({ example: 'https://myapp.com/path/', description: 'URL для проверки' })
  @IsNotEmpty()
  @IsAllowedOrigin(['https://myapp.com', 'https://test.com'])
  url: string;
}
