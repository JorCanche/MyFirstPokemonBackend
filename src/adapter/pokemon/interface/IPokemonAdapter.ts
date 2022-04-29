import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";

export default interface IPokemonAdapter {
  find(): Promise<IPokemonDTO []>;

  findById(id: string): Promise<IPokemonDTO>
}