import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePembeliDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Pertalite', description: 'Jenis Bensin yang dibeli' })
  jenis_bensin: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Motor', description: 'Jenis Kendaraan pembeli' })
  jenis_kendaraan: string;
}