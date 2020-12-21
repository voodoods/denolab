import { CollectionType } from "../db/collection-type.ts";
import { DatabaseClient } from "../db/db.ts";
import { Collection, Component } from "../deps.ts";
import { Plant } from "./model/plant.ts";

@Component()
export class PlantRepository {

    collection: Collection<Plant>;

    constructor(readonly dbClient: DatabaseClient) {
        this.collection = dbClient.getCollection<Plant>(CollectionType.PLANTS);
    }

    async findWateringHistory(): Promise<Plant[]>{
        return await this.collection.find({});
    }
}
