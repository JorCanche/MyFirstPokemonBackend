import IRead from "src/repository/commons/interface/IRead";
import IWrite from "src/repository/commons/interface/IWrite";
import Pokemon from "src/repository/entities/implementation/Pokemon";

export default interface IPokemonRepository extends  IRead<Pokemon>, IWrite<Pokemon>{
    findByName(name:string): Promise<Pokemon>
}