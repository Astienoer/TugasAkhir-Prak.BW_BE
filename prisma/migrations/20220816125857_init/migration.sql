-- CreateTable
CREATE TABLE `wargart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NULL,
    `jenisKelamin` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,

    UNIQUE INDEX `wargart_nik_key`(`nik`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
