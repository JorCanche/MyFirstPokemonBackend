import IType from "src/repository/entities/interface/IType";

export default interface IPokemonDTO {    

    name: string;
  
    image: string;
  
    type: IType;

  }