import { Controller, GET, RouteParam } from "../deps.ts";
import { UserService } from "./user.service.ts";
import { User } from "./model/user.ts";

@Controller("/users")
export class UserController {

    constructor(private readonly userService: UserService) {}

    @GET("")
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }
    @GET("/:id")
    async getUserById(@RouteParam() id: string): Promise<User | null> {
        return await this.userService.getUserById(id);
    }
}
