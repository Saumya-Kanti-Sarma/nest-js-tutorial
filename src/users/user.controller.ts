import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("account/user")
export class UserController {
  constructor(private readonly userServices: UserService) { }

  @Get()
  getAllUsers() {
    return this.userServices.getAllUsers()
  }
  @Get(":id")
  getUserById(@Param('id') id: string) {
    return this.userServices.getUserById(id)
  }
  @Get("search")
  getUserBySearch(@Query('search') search: string) {
    return this.userServices.getUserBySearch(search)
  }
  @Post()
  postAllUsers() {
    return this.userServices.postAllUsers()
  }
}