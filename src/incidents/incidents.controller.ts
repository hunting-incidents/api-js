import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { ListIncidentsDto } from './dto/list-incident.dto';

@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  @Post()
  create(@Body() createIncidentDto: CreateIncidentDto) {
    return this.incidentsService.create(createIncidentDto);
  }

  @Get()
  findAll(@Query() filter: ListIncidentsDto) {
    return this.incidentsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncidentDto: UpdateIncidentDto,
  ) {
    return this.incidentsService.update(+id, updateIncidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentsService.remove(+id);
  }
}
