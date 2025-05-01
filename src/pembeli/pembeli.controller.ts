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
import { PembeliService } from './pembeli.service';
import { CreatePembeliDto } from './dto/create-pembeli.dto';
import { UpdatePembeliDto } from './dto/update-pembeli.dto';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { Pembeli } from './pembeli.entity';

@ApiTags('Pembeli Records')
@ApiBearerAuth()
@Controller('pembeli')
export class PembeliController {
  constructor(private readonly pembeliService: PembeliService) {}

  @Post()
  @ApiOperation({ summary: 'Create new pembeli record' })
  @ApiResponse({
    status: 201,
    description: 'Record created successfully.',
    type: Pembeli,
  })
  @ApiResponse({ status: 400, description: 'Bad Request, validation failed.' })
  create(@Body() createPembeliDto: CreatePembeliDto): Promise<Pembeli> {
    return this.pembeliService.create(createPembeliDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pembeli records' })
  @ApiResponse({
    status: 200,
    description: 'List of all pembeli records.',
    type: [Pembeli],
  })
  findAll(): Promise<Pembeli[]> {
    return this.pembeliService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get pembeli record by ID' })
  @ApiParam({ name: 'id', description: 'Record ID', type: Number })
  @ApiResponse({ status: 200, description: 'Record details.', type: Pembeli })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Pembeli> {
    return this.pembeliService.findOne(id);
  }

  // Patch/Delete mungkin jarang digunakan
  @Patch(':id')
  @ApiOperation({ summary: 'Update pembeli record by ID (use with caution)' })
  @ApiParam({ name: 'id', description: 'Record ID', type: Number })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePembeliDto: UpdatePembeliDto,
  ): Promise<Pembeli> {
    return this.pembeliService.update(id, updatePembeliDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete pembeli record by ID (use with caution)' })
  @ApiParam({ name: 'id', description: 'Record ID', type: Number })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pembeliService.remove(id);
  }
}
