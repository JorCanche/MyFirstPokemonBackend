import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import container from "src/inversify.config";
import TYPES from "src/types";
import "reflect-metadata"
import { IPokemon, IPokemonRepository } from "src/repository";


const CreatePokemonHandler = async (event) => {
    const iPokemonRepository: IPokemonRepository = container.get<IPokemonRepository>(TYPES.PokemonRepository);
    const Pokemon: IPokemon = await iPokemonRepository.create(event.body);
    return formatJSONResponse({
      Pokemon
    });
  };



export const CreatePokemon = middyfy(CreatePokemonHandler);