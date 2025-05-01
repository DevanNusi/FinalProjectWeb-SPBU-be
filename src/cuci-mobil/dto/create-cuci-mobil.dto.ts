import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCuciMobilDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @ApiProperty({ example: 'D 1234 ABC', description: 'Nomor Polisi Kendaraan' })
  nomor_polisi: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ default: false, description: 'Apakah cuci kolong?' })
  cuci_kolong?: boolean = false; // Default false

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ default: false, description: 'Apakah cuci body?' })
  cuci_body?: boolean = false; // Default false

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ default: false, description: 'Apakah cuci full (body+kolong+interior?)?' })
  cuci_full?: boolean = false; // Default false

  // @IsNumber()
  // @IsOptional()
  // @ApiPropertyOptional({ example: 50000, description: 'Harga total cuci (opsional)' })
  // harga?: number;
}