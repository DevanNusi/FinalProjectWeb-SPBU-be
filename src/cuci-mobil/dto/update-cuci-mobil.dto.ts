import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCuciMobilDto {
  @IsString()
  @IsOptional()
  @MaxLength(15)
  @ApiPropertyOptional()
  nomor_polisi?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  cuci_kolong?: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  cuci_body?: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  cuci_full?: boolean;

  // @IsNumber()
  // @IsOptional()
  // @ApiPropertyOptional()
  // harga?: number;
}