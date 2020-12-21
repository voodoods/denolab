import { Service } from "../deps.ts";
import { UserRepository } from "./user.repository.ts";
import { User } from "./model/user.ts";

@Service()
export class UserService {

    constructor(private readonly userRepository: UserRepository) {}

    getAllUsers(): Promise<User[]> {
        return this.userRepository.findAllUsers();
    }

    getUserById(id: string): Promise<User | null> {
        return this.userRepository.findUserById(id);
    }
}
