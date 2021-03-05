import dotenv from 'dotenv';
dotenv.config();

export = {
  type: 'mysql',
  host: 'habbittree.cudb6vnblhbf.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'habittree',
  password: process.env.DB_PASWORD,
  database: 'typeorm2',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
