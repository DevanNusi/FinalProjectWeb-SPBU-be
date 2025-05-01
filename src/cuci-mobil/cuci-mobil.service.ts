import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuciMobil } from './cuci-mobil.entity';
import { CreateCuciMobilDto } from './dto/create-cuci-mobil.dto';
import { UpdateCuciMobilDto } from './dto/update-cuci-mobil.dto';

@Injectable()
export class CuciMobilService {
  constructor(
    @InjectRepository(CuciMobil)
    private cuciMobilRepository: Repository<CuciMobil>,
  ) {}

  async create(createCuciMobilDto: CreateCuciMobilDto): Promise<CuciMobil> {
    // Logika tambahan? Jika cuci_full=true, set cuci_body dan cuci_kolong = true?
    if (createCuciMobilDto.cuci_full) {
        createCuciMobilDto.cuci_body = true;
        createCuciMobilDto.cuci_kolong = true;
        // Atau logika harga berdasarkan jenis cuci?
    }

    const cuciMobil = this.cuciMobilRepository.create(createCuciMobilDto);
    return this.cuciMobilRepository.save(cuciMobil);
  }

  async findAll(): Promise<CuciMobil[]> {
    return this.cuciMobilRepository.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: number): Promise<CuciMobil> {
    const cuciMobil = await this.cuciMobilRepository.findOneBy({ id });
    if (!cuciMobil) {
      throw new NotFoundException(`Cuci Mobil record with ID ${id} not found`);
    }
    return cuciMobil;
  }

  async update(id: number, updateCuciMobilDto: UpdateCuciMobilDto): Promise<CuciMobil> {
    const cuciMobil = await this.findOne(id);
    // Logika tambahan untuk update?
    Object.assign(cuciMobil, updateCuciMobilDto);
    return this.cuciMobilRepository.save(cuciMobil);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cuciMobilRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cuci Mobil record with ID ${id} not found`);
    }
  }
}