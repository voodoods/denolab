import { CollectionType } from "../db/collection-type.ts";
import { DatabaseClient } from "../db/db.ts";
import { Collection, Component } from "../deps.ts";
import { User } from "./model/user.ts";

@Component()
export class UserRepository {

    collection: Collection<User>;

    constructor(readonly dbClient: DatabaseClient) {
        this.collection = dbClient.getCollection<User>(CollectionType.USERS);
    }

    async findAllUsers(): Promise<User[]>{
        return await this.collection.find({ name: { $ne: null } });
    }

    async findUserById(id: string): Promise<User | null> {
        return await this.collection.findOne({ _id: { $eq: id } });
    }
}
