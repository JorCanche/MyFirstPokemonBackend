import { inject, injectable } from "inversify";
import "reflect-metadata";
import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";
import IUserDTO from "src/adapter/DTO/IUserDTO";
import { IPokemon, IUser, IUserRepository } from "src/repository";
import IPokemonRepository from "src/repository/Pokemon/interface/IPokemonRepository";
import { IMapperService } from "src/shared";
import TYPES from "src/types";
import IPokemonAdapter from "../interface/IPokemonAdapter";

@injectable()
export default class PokemonAdapter implements IPokemonAdapter {
private iPokemonRepository: IPokemonRepository;
private iPokemonMapperService: IMapperService<IPokemon, IPokemonDTO>;

    find(): Promise<IPokemonDTO[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<IPokemonDTO> {
        throw new Error("Method not implemented.");
    }

    constructor(
        @inject(TYPES.UserRepository) iPokemonRepository: IPokemonRepository,
        @inject(TYPES.PokemonMapperService) iPokemonMapperService: IMapperService<IPokemon, IPokemonDTO>,
      ) {
        this.iPokemonRepository = iPokemonRepository;
        this.iPokemonMapperService = iPokemonMapperService;
      }

}