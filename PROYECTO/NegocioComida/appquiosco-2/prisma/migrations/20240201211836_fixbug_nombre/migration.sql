/*
  Warnings:

  - Added the required column `nombre` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `nombre` VARCHAR(191) NOT NULL,
    MODIFY `fecha` VARCHAR(191) NOT NULL;
