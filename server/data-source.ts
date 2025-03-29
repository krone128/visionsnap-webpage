import { DataSource } from 'typeorm';
import { Blog } from './entities/Blog';
import { Portfolio } from './entities/Portfolio';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  entities: [Blog, Portfolio, User],
  migrations: [],
  subscribers: [],
}); 