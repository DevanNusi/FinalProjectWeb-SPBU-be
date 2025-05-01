import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuciMobilService } from './cuci-mobil.service';
import { CuciMobilController } from './cuci-mobil.controller';
import { CuciMobil } from './cuci-mobil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CuciMobil])],
  controllers: [CuciMobilController],
  providers: [CuciMobilService],
})
export class CuciMobilModule {}