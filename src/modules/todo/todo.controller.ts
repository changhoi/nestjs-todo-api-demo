import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { ICreateTodoDto } from "./interfaces/dto.interface";
import { TodoService } from "./todo.service";

@Controller("todos")
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    
    @Post()
    async create(@Body() createTodoDto: ICreateTodoDto) {
        const ret = await this.todoService.createOneTodo(createTodoDto);
        return ret
    }

    @Get()
    async getList() {
        const ret = await this.todoService.getTodoList();
        return ret;
    }

    @Get(":id")
    async getOne(@Param("id") todoId: number) {
        const ret = await this.todoService.getDetailTodo(todoId);
        return ret;
    }

    @Put(":id")
    async toggleDone(@Param("id") todoId: number) {
        const ret = await this.todoService.toggleTodo(todoId);
        return ret;
    }

    @Delete(":id")
    async removeOne(@Param("id") todoId: number) {
        const ret = await this.todoService.removeOneTodo(todoId);
        return ret;
    }
}