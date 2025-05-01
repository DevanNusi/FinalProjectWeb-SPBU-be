import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BensinService } from './bensin.service';
import { BensinController } from './bensin.controller';
import { Bensin } from './bensin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bensin])],
  controllers: [BensinController],
  providers: [BensinService],
  exports: [BensinService], // Export jika dibutuhkan modul lain
})
export class BensinModule {}
