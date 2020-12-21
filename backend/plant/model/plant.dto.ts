import { UserDTO } from "../../user/model/user.dto.ts";

export interface PlantDTO {
    wateredBy: UserDTO;
    wateredAt: string;
}
