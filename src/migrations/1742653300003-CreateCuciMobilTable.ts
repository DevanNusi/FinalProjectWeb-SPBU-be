// src/migration/1742653300003-CreateCuciMobilTable.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

// Timestamp unik baru
export class CreateCuciMobilTable1742653300003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE cuci_mobil (
            id SERIAL PRIMARY KEY,
            nomor_polisi VARCHAR(15) NOT NULL, -- Untuk identifikasi kendaraan
            cuci_kolong BOOLEAN DEFAULT FALSE,
            cuci_body BOOLEAN DEFAULT FALSE,
            cuci_full BOOLEAN DEFAULT FALSE,
            -- Mungkin perlu kolom harga?
            -- harga NUMERIC(10, 2),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE cuci_mobil;`);
  }
}
