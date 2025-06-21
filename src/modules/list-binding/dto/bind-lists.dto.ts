import { IsArray, ArrayNotEmpty, IsObject, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BindListsDto {
  @ApiProperty({
    description: 'Левый список объектов',
    type: 'array',
    isArray: true,
    example: [
      { id: 1, name: 'Ivan' },
      { id: 2, name: 'John' },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsObject({ each: true })
  readonly left: Record<string, unknown>[];

  @ApiProperty({
    description: 'Правый список объектов',
    type: 'array',
    isArray: true,
    example: [
      { userId: 2, city: 'London' },
      { userId: 1, city: 'Moscow' },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsObject({ each: true })
  readonly right: Record<string, unknown>[];

  @ApiProperty({
    description: 'Имя поля-ключа в левом массиве',
    example: 'id',
  })
  @IsString()
  @IsNotEmpty()
  readonly leftKey: string;

  @ApiProperty({
    description: 'Имя поля-ключа в правом массиве',
    example: 'userId',
  })
  @IsString()
  @IsNotEmpty()
  readonly rightKey: string;
}
