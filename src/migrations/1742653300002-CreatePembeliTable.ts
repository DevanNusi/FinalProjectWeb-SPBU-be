// src/migration/1742653300002-CreatePembeliTable.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

// Timestamp unik baru
export class CreatePembeliTable1742653300002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE pembeli (
            id SERIAL PRIMARY KEY, -- Ini akan menjadi 'Id pembeli'
            jenis_bensin VARCHAR(100) NOT NULL, -- Menyimpan nama jenis bensin (teks)
            jenis_kendaraan VARCHAR(50) NOT NULL, -- Mis: Mobil, Motor
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE pembeli;`);
  }
}
