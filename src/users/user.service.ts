import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  getAllUsers() {
    return {
      status: 200,
      message: "All users from service",
      time: Date.now()
    };
  }
  postAllUsers() {
    return {
      status: 200,
      message: "Post users from service",
      time: Date.now()
    };
  }
  getUserById(id: string) {
    return {
      status: 200,
      userId: id,
      message: `User fetched with ID ${id}`,
    };
  }
  getUserBySearch(account: string) {
    return {
      status: 200,
      account,
      message: `Searched for account ${account}`,
    };
  }
}