import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateBensinDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Pertalite', description: 'Jenis Bensin' })
  jenis_bensin: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive() // Harga harus positif
  @Min(0.01)    // Harga minimal
  @IsNotEmpty()
  @ApiProperty({ example: 10000.00, description: 'Harga per liter' })
  harga_per_liter: number;
}