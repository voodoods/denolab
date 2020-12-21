import { Value } from "https://deno.land/x/mandarinets@v2.3.0/main-core/decorators/configuration-readers/value.ts";
import { Component, Collection, Database, MongoClient } from "../deps.ts";
import { CollectionType } from "./collection-type.ts";

@Component()
export class DatabaseClient {

    @Value("DB_HOST_URL")
    private static readonly DB_HOST_URL: string;

    @Value("DB_NAME")
    private static readonly DB_NAME: string;

    private readonly db: Database;

    constructor() {
        const client = new MongoClient();
        client.connectWithUri(DatabaseClient.DB_HOST_URL);
        this.db = client.database(DatabaseClient.DB_NAME);
    }

    getCollection<T>(collection: CollectionType): Collection<T> {
        return this.db.collection<T>(collection);
    }
}
