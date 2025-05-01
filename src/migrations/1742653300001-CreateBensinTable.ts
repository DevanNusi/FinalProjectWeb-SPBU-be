// src/migration/1742653300001-CreateBensinTable.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

// Timestamp unik baru
export class CreateBensinTable1742653300001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE bensin (
            id SERIAL PRIMARY KEY,
            jenis_bensin VARCHAR(50) UNIQUE NOT NULL,
            harga_per_liter NUMERIC(10, 2) NOT NULL, -- Harga per liter
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE bensin;`);
  }
}
