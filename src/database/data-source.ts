//import { ConfigService } from '@nestjs/config';

//const configService = new ConfigService();

const AppDataSource = {
  type: 'mysql',
  host: 'localhost', //configService.get<string>('DB_HOST'), //process.env.DB_HOST,
  port: 3307, //configService.get<number>('DB_PORT'), //+process.env.DB_PORT,
  username: 'root', //configService.get<string>('DB_USER'), //process.env.DB_USER,
  password: 'admin', //configService.get<string>('DB_PASSWORD'), //process.env.DB_PASSWORD,
  database: 'save-test', //configService.get<string>('DB_NAME'), //process.env.DB_NAME,
  entities: [`src/**/*.entity.ts`],
  //autoLoadEntities: true,
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default AppDataSource;
