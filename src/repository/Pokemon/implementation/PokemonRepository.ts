import { inject, injectable } from "inversify";
import "reflect-metadata";
import Pokemon from "src/repository/entities/implementation/Pokemon";
import { IDBConnectionManager } from "src/shared";
import IPokemonRepository from "../interface/IPokemonRepository";
import TYPES from "src/types"
import { SelectQueryBuilder } from "typeorm";

@injectable()
export default class PokemonRepository implements IPokemonRepository {
private iDBConnectionManager: IDBConnectionManager;

constructor(
  @inject(TYPES.DBConnectionManager) iDBConnectionManager:IDBConnectionManager
){
  this.iDBConnectionManager = iDBConnectionManager;
}

  findByName(name: string): Promise<Pokemon> {
    throw new Error("Method not implemented.");
  }
  find(): Promise<Pokemon[]> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Pokemon> {
    await this.iDBConnectionManager.connect();
    // tslint:disable-next-line:no-console
    // console.log(this.dBConnectionManager.connection);
    try {
      const query: SelectQueryBuilder<Pokemon> = this.iDBConnectionManager.connection
      .getRepository(Pokemon).createQueryBuilder("user")
      .where("user.id = :id", { id });

      const pokemon: Pokemon = await query.getOne();

      return pokemon;
      // tslint:disable-next-line:no-console
      // console.log(process.env.DATABASE_URL);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error("PokemonRepository.findById", error)
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      await this.iDBConnectionManager.disconnect();
    }

  }
  async create(pokemon: Partial<Pokemon>): Promise<Pokemon> {
    await this.iDBConnectionManager.connect();

    try {
      const createdPokemon: Pokemon = await this.iDBConnectionManager.connection
      .getRepository(Pokemon).save(pokemon);
      // tslint:disable-next-line:no-console
      console.log("UserPokemon.create", createdPokemon)
      return createdPokemon;
    } catch (error) {
      throw error;
    } finally {
      // tslint:disable-next-line:no-console
      console.log("disconnected");
      await this.iDBConnectionManager.disconnect();
    }
  }
  update(t: Partial<Pokemon>): Promise<Pokemon> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  sayHello(): string {
    return 'Hello, world!';
  }
}