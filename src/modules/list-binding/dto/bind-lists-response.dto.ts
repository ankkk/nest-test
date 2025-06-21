import { ApiProperty } from '@nestjs/swagger';

export class BindListsResponseDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: 'Ivan', description: 'Имя' })
  name: string;

  @ApiProperty({ example: 'Moscow', description: 'Город' })
  city: string;
}
