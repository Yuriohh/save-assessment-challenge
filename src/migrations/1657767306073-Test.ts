import { MigrationInterface, QueryRunner } from 'typeorm';

export class Test1657767306073 implements MigrationInterface {
  name = 'Test1657767306073';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`assessments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`questions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`number_question\` int NOT NULL, \`description\` text NOT NULL, \`assessmentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`alternatives\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` text NOT NULL, \`right_alternative\` tinyint NOT NULL, \`questionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`questions\` ADD CONSTRAINT \`FK_465acef6f7d1194fb40a2e786cf\` FOREIGN KEY (\`assessmentId\`) REFERENCES \`assessments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`alternatives\` ADD CONSTRAINT \`FK_935155fdb2e7e8a609028817abb\` FOREIGN KEY (\`questionId\`) REFERENCES \`questions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`alternatives\` DROP FOREIGN KEY \`FK_935155fdb2e7e8a609028817abb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`questions\` DROP FOREIGN KEY \`FK_465acef6f7d1194fb40a2e786cf\``,
    );
    await queryRunner.query(`DROP TABLE \`alternatives\``);
    await queryRunner.query(`DROP TABLE \`questions\``);
    await queryRunner.query(`DROP TABLE \`assessments\``);
  }
}
