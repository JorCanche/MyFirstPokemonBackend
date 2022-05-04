import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "./types";

/**
 * Inversify container
 * @function {Container} container
 */

//#region DBConnectionManager
import { DBConnectionManager, IDBConnectionManager } from "./shared";
//#endregion

//#region User imports
import { UserAdapter, IUserAdapter, UserMapperService } from "./adapter";
import { UserUseCase, IUserUseCase } from "./usecase";
import { UserRepository, IUserRepository } from "./repository";
import PokemonAdapter from "./adapter/pokemon/implementation/PokemonAdapter";
import IPokemonRepository from "./repository/Pokemon/interface/IPokemonRepository";
import IPokemonAdapter from "./adapter/pokemon/interface/IPokemonAdapter";
import PokemonRepository from "./repository/Pokemon/implementation/PokemonRepository";
import IPokemonMapperService from "./adapter/pokemon/interface/IPokemonMapperService";
//#endregion

const container: Container = new Container();

//#region DBConnectionManager
container.bind<IDBConnectionManager>(TYPES.DBConnectionManager).to(DBConnectionManager).inSingletonScope();
//#endregion

//#region User bindings
container.bind<IUserAdapter>(TYPES.UserAdapter).to(UserAdapter);
container.bind<IUserUseCase>(TYPES.UserUseCase).to(UserUseCase);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<UserMapperService>(TYPES.UserMapperService).to(UserMapperService);
//#endregion

//#region Pokemon bindings
container.bind<IPokemonAdapter>(TYPES.PokemonAdapter).to(PokemonAdapter);
container.bind<IPokemonRepository>(TYPES.PokemonRepository).to(PokemonRepository);
container.bind<IPokemonMapperService>(TYPES.PokemonMapperService).to(IPokemonMapperService);
//#endregion

export default container;

