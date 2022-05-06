import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import IPokemonAdapter from "src/adapter/pokemon/interface/IPokemonAdapter";
import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";
import container from "src/inversify.config";
import TYPES from "src/types";
import "reflect-metadata"
import { IPokemon, IPokemonRepository } from "src/repository";

const getPokemonHandler = async (event) => {
  const iPokemonAdapter: IPokemonAdapter = container.get<IPokemonAdapter>(TYPES.PokemonAdapter);
  const Pokemon: IPokemonDTO = await iPokemonAdapter.findById(event.pathParameters.id);
  return formatJSONResponse({
    Pokemon
  });
};

export const getPokemon = middyfy(getPokemonHandler);

const createPokemonHandler = async (event) => {
  const iPokemonRepository: IPokemonRepository = container.get<IPokemonRepository>(TYPES.PokemonRepository);
  const pokemon: IPokemon = await iPokemonRepository.create(event.body);
  return formatJSONResponse({
    pokemon
  });
};

export const createPokemon = middyfy(createPokemonHandler);