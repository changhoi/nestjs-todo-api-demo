import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { ICreateTodoDto } from "./interfaces/dto.interface";

@Controller("todos")
export class TodoController {
    @Post()
    create(@Body() createTodoDto: ICreateTodoDto) {
        return createTodoDto
    }

    @Get()
    getList() {
        return "Hello World!"
    }

    @Get(":id")
    getOne(@Param("id") todoId: number) {
        return todoId
    }

    @Put(":id")
    toggleDone(@Param("id") todoId: number) {
        return todoId
    }

    @Delete(":id")
    removeOne(@Param("id") todoId: number) {
        return todoId
    }
}