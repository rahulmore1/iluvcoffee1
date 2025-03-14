import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return the coffee ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
