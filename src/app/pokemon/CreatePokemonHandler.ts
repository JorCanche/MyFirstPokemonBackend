import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { IPokemonAdapter } from "src/adapter";
import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";
import container from "src/inversify.config";
import TYPES from "src/types";
import "reflect-metadata"

const getPokemonHandler = async (event) => {
  const iPokemonAdapter: IPokemonAdapter = container.get<IPokemonAdapter>(TYPES.PokemonAdapter);
  const Pokemon: IPokemonDTO = await iPokemonAdapter.findById(event.pathParameters.id);
  return formatJSONResponse({
    Pokemon
  });
};

const CreatePokemonHandler = async (event) => {
    const iPokemonAdapter: IPokemonAdapter = container.CreatePokemon(TYPES.PokemonAdapter);
    const Pokemon: IPokemonDTO = await iPokemonAdapter.findById(event.pathParameters.id);
    return formatJSONResponse({
      Pokemon
    });
  };



export const CreatePokemon = middyfy(CreatePokemonHandler);