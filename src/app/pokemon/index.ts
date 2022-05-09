import "reflect-metadata";
import { handlerPath } from '@libs/handler-resolver';

export const createPokemon = {
  handler: `${handlerPath(__dirname)}/pokemonHandler.createPokemon`,
  events: [
    {
      http: {
        method: 'post',
        path: 'pokemon',
      },
    },
  ],
};

export const getPokemon = {
  handler: `${handlerPath(__dirname)}/pokemonHandler.getPokemon`,
  events: [
    {
      http: {
        method: 'get',
        path: 'pokemon',
      },
    },
  ],
};

export const updatePokemon = {
  handler: `${handlerPath(__dirname)}/pokemonHandler.updatePokemon`,
  events: [
    {
      http: {
        method: 'put',
        path: 'pokemon'
       }
    },
  ],
};

