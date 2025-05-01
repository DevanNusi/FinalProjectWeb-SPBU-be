import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePembeliDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  jenis_bensin?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  jenis_kendaraan?: string;
}
