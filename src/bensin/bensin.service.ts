import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bensin } from './bensin.entity';
import { CreateBensinDto } from './dto/create-bensin.dto';
import { UpdateBensinDto } from './dto/update-bensin.dto';

@Injectable()
export class BensinService {
  constructor(
    @InjectRepository(Bensin)
    private bensinRepository: Repository<Bensin>,
  ) {}

  async create(createBensinDto: CreateBensinDto): Promise<Bensin> {
    // Cek duplikasi jenis bensin
    const existing = await this.bensinRepository.findOneBy({ jenis_bensin: createBensinDto.jenis_bensin });
    if (existing) {
        throw new ConflictException(`Jenis bensin '${createBensinDto.jenis_bensin}' already exists`);
    }
    const bensin = this.bensinRepository.create(createBensinDto);
    return this.bensinRepository.save(bensin);
  }

  async findAll(): Promise<Bensin[]> {
    return this.bensinRepository.find();
  }

  async findOne(id: number): Promise<Bensin> {
    const bensin = await this.bensinRepository.findOneBy({ id });
    if (!bensin) {
      throw new NotFoundException(`Bensin with ID ${id} not found`);
    }
    return bensin;
  }

  async update(id: number, updateBensinDto: UpdateBensinDto): Promise<Bensin> {
    const bensin = await this.findOne(id); // Includes NotFound check

    // Cek duplikasi jika jenis bensin diubah
    if (updateBensinDto.jenis_bensin && updateBensinDto.jenis_bensin !== bensin.jenis_bensin) {
        const existing = await this.bensinRepository.findOneBy({ jenis_bensin: updateBensinDto.jenis_bensin });
        if (existing && existing.id !== id) {
             throw new ConflictException(`Jenis bensin '${updateBensinDto.jenis_bensin}' already exists`);
        }
    }

    // Merge update DTO into existing entity
    Object.assign(bensin, updateBensinDto);
    return this.bensinRepository.save(bensin);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bensinRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bensin with ID ${id} not found`);
    }
  }
}