import { Controller, GET } from "../deps.ts";
import { PlantService } from "./plant.service.ts";
import { PlantDTO } from "./model/plant.dto.ts";

@Controller("/watering")
export class PlantController {

    constructor(private readonly plantService: PlantService) {}

    @GET("")
    async getWateringHistory(): Promise<PlantDTO[]> {
        return await this.plantService.getWateringHistory();
    }
}
