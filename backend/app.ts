import { MandarineCore } from "./deps.ts";
import { UserController } from "./user/user.controller.ts";
import { UserService } from "./user/user.service.ts";

import { DatabaseClient } from "./db/db.ts";
import { UserRepository } from "./user/user.repository.ts";
import { PlantController } from "./plant/plant.controller.ts";
import { PlantService } from "./plant/plant.service.ts";
import { PlantRepository } from "./plant/plant.repository.ts";

const controllers = [
    PlantController,
    UserController
];

const services = [
    PlantService,
    UserService
];

const components = [
    DatabaseClient,
    PlantRepository,
    UserRepository
];

new MandarineCore().MVC().run();
