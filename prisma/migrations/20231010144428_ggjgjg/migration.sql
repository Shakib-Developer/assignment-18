/*
  Warnings:

  - You are about to drop the column `post_id` on the `post_meta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `post_meta` DROP FOREIGN KEY `post_meta_post_id_fkey`;

-- AlterTable
ALTER TABLE `post_meta` DROP COLUMN `post_id`;
