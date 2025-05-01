import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pembeli } from './pembeli.entity';
import { CreatePembeliDto } from './dto/create-pembeli.dto';
import { UpdatePembeliDto } from './dto/update-pembeli.dto';

@Injectable()
export class PembeliService {
  constructor(
    @InjectRepository(Pembeli)
    private pembeliRepository: Repository<Pembeli>,
  ) {}

  async create(createPembeliDto: CreatePembeliDto): Promise<Pembeli> {
    const pembeli = this.pembeliRepository.create(createPembeliDto);
    return this.pembeliRepository.save(pembeli);
  }

  async findAll(): Promise<Pembeli[]> {
    return this.pembeliRepository.find({ order: { created_at: 'DESC' } }); // Urutkan terbaru dulu
  }

  async findOne(id: number): Promise<Pembeli> {
    const pembeli = await this.pembeliRepository.findOneBy({ id });
    if (!pembeli) {
      throw new NotFoundException(`Pembeli record with ID ${id} not found`);
    }
    return pembeli;
  }

  // Update mungkin jarang diperlukan untuk log sederhana ini
  async update(id: number, updatePembeliDto: UpdatePembeliDto): Promise<Pembeli> {
    const pembeli = await this.findOne(id);
    Object.assign(pembeli, updatePembeliDto);
    return this.pembeliRepository.save(pembeli);
  }

  // Delete mungkin jarang diperlukan untuk log sederhana ini
  async remove(id: number): Promise<void> {
    const result = await this.pembeliRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pembeli record with ID ${id} not found`);
    }
  }
}