import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BensinService } from './bensin.service';
import { CreateBensinDto } from './dto/create-bensin.dto';
import { UpdateBensinDto } from './dto/update-bensin.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { Bensin } from './bensin.entity';

@ApiTags('Bensin Management')
@ApiBearerAuth()
@Controller('bensin')
export class BensinController {
  constructor(private readonly bensinService: BensinService) {}

  @Post()
  @ApiOperation({ summary: 'Add new bensin type' })
  @ApiResponse({
    status: 201,
    description: 'Bensin type added successfully.',
    type: Bensin,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict, bensin type already exists.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request, validation failed.' })
  create(@Body() createBensinDto: CreateBensinDto): Promise<Bensin> {
    return this.bensinService.create(createBensinDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bensin types' })
  @ApiResponse({
    status: 200,
    description: 'List of all bensin types.',
    type: [Bensin],
  })
  findAll(): Promise<Bensin[]> {
    return this.bensinService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bensin type by ID' })
  @ApiParam({ name: 'id', description: 'Bensin ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Bensin type details.',
    type: Bensin,
  })
  @ApiResponse({ status: 404, description: 'Bensin type not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Bensin> {
    return this.bensinService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update bensin type by ID' })
  @ApiParam({ name: 'id', description: 'Bensin ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Bensin type updated successfully.',
    type: Bensin,
  })
  @ApiResponse({ status: 404, description: 'Bensin type not found.' })
  @ApiResponse({
    status: 409,
    description: 'Conflict, new bensin type name already exists.',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBensinDto: UpdateBensinDto,
  ): Promise<Bensin> {
    return this.bensinService.update(id, updateBensinDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Respond with 204 No Content on successful delete
  @ApiOperation({ summary: 'Delete bensin type by ID' })
  @ApiParam({ name: 'id', description: 'Bensin ID', type: Number })
  @ApiResponse({
    status: 204,
    description: 'Bensin type deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Bensin type not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.bensinService.remove(id);
  }
}
