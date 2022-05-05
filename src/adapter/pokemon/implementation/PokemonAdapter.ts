import { inject, injectable } from "inversify";
import "reflect-metadata";
import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";
import { IPokemon } from "src/repository";
import IPokemonRepository from "src/repository/Pokemon/interface/IPokemonRepository";
import { IMapperService } from "src/shared";
import TYPES from "src/types";
import IPokemonAdapter from "../interface/IPokemonAdapter";

@injectable()
export default class PokemonAdapter implements IPokemonAdapter {
private iPokemonRepository: IPokemonRepository;
private iPokemonMapperService: IMapperService<IPokemon, IPokemonDTO>;

    constructor(
        @inject(TYPES.UserRepository) iPokemonRepository: IPokemonRepository,
        @inject(TYPES.PokemonMapperService) iPokemonMapperService: IMapperService<IPokemon, IPokemonDTO>,
      ) {
        this.iPokemonRepository = iPokemonRepository;
        this.iPokemonMapperService = iPokemonMapperService;
      }
 
      async find(): Promise<IPokemonDTO []> {
        const pokemons: IPokemon [] = await this.iPokemonRepository.find();
        const pokemonsDTO: IPokemonDTO [] = this.iPokemonMapperService.transform(pokemons);
        return pokemonsDTO;
      }
    
      async findById(id: string): Promise<IPokemonDTO> {
        const pokemon: IPokemon = await this.iPokemonRepository.findById(id);
        const pokemonDTO: IPokemonDTO = this.iPokemonMapperService.transform(pokemon);
        return pokemonDTO;
      }

}