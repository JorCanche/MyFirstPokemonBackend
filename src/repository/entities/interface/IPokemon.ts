import IPokemonByTrainer from "./IPokemonByTrainer";
import IType from "./IType";

export default interface IPokemon {
  name: string,
  edad: number,
  image: string,
  type: IType,
  pokemonByTrainer: IPokemonByTrainer[]
}