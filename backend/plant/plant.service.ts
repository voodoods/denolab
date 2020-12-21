import { Service } from "../deps.ts";
import { PlantRepository } from "./plant.repository.ts";
import { Plant } from "./model/plant.ts";
import { UserService } from "../user/user.service.ts";
import { PlantDTO } from "./model/plant.dto.ts";
import { UserDTO } from "../user/model/user.dto.ts";

@Service()
export class PlantService {

    constructor(
        private readonly plantRepository: PlantRepository,
        private readonly userService: UserService
    ) {}

    async getWateringHistory(): Promise<PlantDTO[]> {
        const wateringHistory = await this.plantRepository.findWateringHistory();
        const users = await this.userService.getAllUsers();

        return wateringHistory.map((entry: Plant) => {
            return {
                wateredAt: entry.watered_at,
                wateredBy: users.find((user) => user._id === entry.watered_by) || { name: "Unknown User" } as UserDTO
            }
        })
    }
}
