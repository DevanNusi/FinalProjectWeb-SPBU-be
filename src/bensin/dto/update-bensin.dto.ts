import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class UpdateBensinDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ example: 'Pertamax Turbo', description: 'Jenis Bensin (opsional)' })
  jenis_bensin?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @Min(0.01)
  @IsOptional()
  @ApiPropertyOptional({ example: 15000.00, description: 'Harga per liter (opsional)' })
  harga_per_liter?: number;
}