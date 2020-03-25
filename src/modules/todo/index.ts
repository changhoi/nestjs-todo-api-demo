import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import Todo from "src/models/todo.entity";
import { TodoService } from "./todo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {}