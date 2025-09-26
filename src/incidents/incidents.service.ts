import { Injectable, Logger } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { ListIncidentsDto } from './dto/list-incident.dto';

@Injectable()
export class IncidentsService {
  private readonly logger = new Logger(IncidentsService.name);

  create(_createIncidentDto: CreateIncidentDto) {
    return 'This action adds a new incident';
  }

  findAll(_filter: ListIncidentsDto) {
    return `This action returns all incidents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incident`;
  }

  update(id: number, _updateIncidentDto: UpdateIncidentDto) {
    return `This action updates a #${id} incident`;
  }

  remove(id: number) {
    return `This action removes a #${id} incident`;
  }
}
