import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'todo-database',
      entities: [__dirname + "/models/*.entity.ts"],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}