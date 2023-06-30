import { ROOT } from "./endpoints";
import { EndpointRegistry } from "./registry";
import { addUsersUseCaseImpl } from "./useCase/addUsers/addUsersUseCaseImpl";
import { retrieveUsersUseCase } from "./useCase/retrieveUsers/retrieveUsersUseCaseImpl";

let registry = new EndpointRegistry()
registry.get(ROOT, new retrieveUsersUseCase())
registry.post(ROOT, new addUsersUseCaseImpl())

registry.start()