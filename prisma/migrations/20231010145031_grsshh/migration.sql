/*
  Warnings:

  - You are about to drop the column `user_id` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `post_id` on the `post_comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `post_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `post_comment` DROP FOREIGN KEY `post_comment_post_id_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `post_comment` DROP COLUMN `post_id`;
