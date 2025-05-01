import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CuciMobilService } from './cuci-mobil.service';
import { CreateCuciMobilDto } from './dto/create-cuci-mobil.dto';
import { UpdateCuciMobilDto } from './dto/update-cuci-mobil.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CuciMobil } from './cuci-mobil.entity';

@ApiTags('Cuci Mobil Records')
@ApiBearerAuth()
@Controller('cuci-mobil')
export class CuciMobilController {
  constructor(private readonly cuciMobilService: CuciMobilService) {}

  @Post()
  @ApiOperation({ summary: 'Create new cuci mobil record' })
  @ApiResponse({
    status: 201,
    description: 'Record created successfully.',
    type: CuciMobil,
  })
  @ApiResponse({ status: 400, description: 'Bad Request, validation failed.' })
  create(@Body() createCuciMobilDto: CreateCuciMobilDto): Promise<CuciMobil> {
    return this.cuciMobilService.create(createCuciMobilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cuci mobil records' })
  @ApiResponse({
    status: 200,
    description: 'List of all cuci mobil records.',
    type: [CuciMobil],
  })
  findAll(): Promise<CuciMobil[]> {
    return this.cuciMobilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cuci mobil record by ID' })
  @ApiParam({ name: 'id', description: 'Record ID', type: Number })
  @ApiResponse({ status: 200, description: 'Record details.', type: CuciMobil })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<CuciMobil> {
    return this.cuciMobilService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update cuci mobil record by ID' })
  @ApiParam({ name: 'id', description: 'Record ID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Record updated successfully.',
    type: CuciMobil,
  })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCuciMobilDto: UpdateCuciMobilDto,
  ): Promise<CuciMobil> {
    return this.cuciMobilService.update(id, updateCuciMobilDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete cuci mobil record by ID' })
  @ApiParam({ name: 'id', description: 'Record ID', type: Number })
  @ApiResponse({ status: 204, description: 'Record deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.cuciMobilService.remove(id);
  }
}
