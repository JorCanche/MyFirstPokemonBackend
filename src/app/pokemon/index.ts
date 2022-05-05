import "reflect-metadata";
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/createPokemonHandler.createPokemon`,
  events: [
    {
      http: {
        method: 'post',
        path: 'pokemon',
      },
    },
  ],
};
