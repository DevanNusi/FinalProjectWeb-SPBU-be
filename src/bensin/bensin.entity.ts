import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('bensin') // Nama tabel 'bensin'
export class Bensin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true, nullable: false })
  @Index({ unique: true })
  jenis_bensin: string; // Mis: Pertamax, Pertalite

  @Column({ type: 'numeric', precision: 10, scale: 2, nullable: false })
  harga_per_liter: number; // Harus number di code

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}