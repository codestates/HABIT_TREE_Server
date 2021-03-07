const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    type: 'mysql',
    host: 'habbittree.cudb6vnblhbf.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: process.env.DB_PASSWORD,
    database: 'typeorm2',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};