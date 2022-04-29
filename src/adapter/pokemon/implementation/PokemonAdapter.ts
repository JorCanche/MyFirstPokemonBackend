import "reflect-metadata";
import IUser from "../../../repository/entities/interface/IUser";
import { IPokemon, IUserRepository } from "../../../repository";
import IPokemonAdapter from "../interface/IPokemonAdapter";
import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";
import { IMapperService } from "../../../shared";
import { inject, injectable } from "inversify";
import TYPES from "../../../types";

@injectable()
export default class PokemonAdapter  {
//   private iUserRepository: IUserRepository;
//   private iUserMapperService: IMapperService<IUser, IPokemonDTO>;

//   constructor(
//     @inject(TYPES.UserRepository) iUserRepository: IUserRepository,
//     @inject(TYPES.UserMapperService) iUserMapperService: IMapperService<IUser, IPokemonDTO>,
//   ) {
//     this.iUserRepository = iUserRepository;
//     this.iUserMapperService = iUserMapperService;
//   }

//   async find(): Promise<IPokemonDTO []> {
//     const pokemones: IPokemon [] = await this.iUserRepository.find();
//     const pokemonesDTO: IPokemonDTO [] = this.iUserMapperService.transform(pokemones);
//     return pokemonesDTO;
//   }

//   async findById(name: string): Promise<IPokemonDTO> {
//     const pokemon: IPokemon = await this.iUserRepository.findById(name);
//     const pokemonDTO: IPokemonDTO = this.iUserMapperService.transform(pokemon);
//     return pokemonDTO;
//   }
}