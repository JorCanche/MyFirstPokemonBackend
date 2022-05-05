import { injectable } from "inversify";
import IPokemonDTO from "src/adapter/DTO/IPokemonDTO";
import { IPokemon } from "src/repository";
import MapperService from "src/shared/utils/mapper/abstraction/MapperService";

@injectable()
export default class IPokemonMapperService extends MapperService<IPokemon, IPokemonDTO>{
protected map(entity: IPokemon) {
        return {
            name: entity.name,
            edad: entity.edad,
            image: entity.image,
            type: entity.type,
        }    
    }
}