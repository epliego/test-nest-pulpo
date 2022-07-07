import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  connectTimeout: 3600000,
  host: 'localhost',
  port: 3306,
  username: 'phpmyadmin',
  password: '123456',
  database: 'test_pulpo',
  entities: ['__dirname + /../**/*.entity{.ts,.js}'],
  synchronize: false,
});
