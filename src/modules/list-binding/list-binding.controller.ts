import { Body, Controller, Post, SerializeOptions } from '@nestjs/common';
import { ListBindingService } from './list-binding.service';
import { BindListsDto } from './dto/bind-lists.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BindListsResponseDto } from './dto/bind-lists-response.dto';

@ApiTags('Связывание двух списков')
@Controller('list-binding')
export class ListBindingController {
  constructor(private readonly listBindingService: ListBindingService) {}

  @Post()
  @ApiOkResponse({ type: BindListsResponseDto, isArray: true, description: 'Результат связывания двух списков' })
  @SerializeOptions({ type: BindListsResponseDto })
  createBindLists(@Body() dto: BindListsDto) {
    return this.listBindingService.bind(dto);
  }
}
