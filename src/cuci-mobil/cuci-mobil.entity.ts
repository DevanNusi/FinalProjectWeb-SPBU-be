import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('cuci_mobil') // Nama tabel 'cuci_mobil'
export class CuciMobil {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15, nullable: false })
  @Index() // Index nomor polisi untuk pencarian
  nomor_polisi: string;

  @Column({ type: 'boolean', default: false })
  cuci_kolong: boolean;

  @Column({ type: 'boolean', default: false })
  cuci_body: boolean;

  @Column({ type: 'boolean', default: false })
  cuci_full: boolean; // Jika true, mungkin cuci_kolong dan cuci_body juga true? (Logika di service)

  // Mungkin perlu kolom harga total?
  // @Column({ type: 'numeric', precision: 10, scale: 2, nullable: true })
  // harga: number | null;

  @CreateDateColumn()
  created_at: Date; // Waktu record dibuat (waktu cuci)

  @UpdateDateColumn()
  updated_at: Date;
}