import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('pembeli') // Nama tabel 'pembeli'
export class Pembeli {
  @PrimaryGeneratedColumn()
  id: number; // ID Pembeli (record)

  @Column({ length: 100, nullable: false })
  jenis_bensin: string; // Nama jenis bensin saat itu (tidak terhubung FK)

  @Column({ length: 50, nullable: false })
  jenis_kendaraan: string; // Mis: Mobil, Motor

  @CreateDateColumn()
  created_at: Date; // Waktu record dibuat (waktu pembelian)

  @UpdateDateColumn()
  updated_at: Date;
}