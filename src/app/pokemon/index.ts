import "reflect-metadata";
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/CreatePokemonHandler.CreatePokemon`,
  events: [
    {
      http: {
        method: 'post',
        path: 'pokemon',
      },
    },
  ],
};
