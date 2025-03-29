import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Blog } from '../entities/Blog';
import { Portfolio } from '../entities/Portfolio';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true, // Set to false in production
  logging: true,
  entities: [User, Blog, Portfolio],
  migrations: [],
  subscribers: []
}); 