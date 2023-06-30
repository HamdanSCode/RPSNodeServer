"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endpoints_1 = require("./endpoints");
const registry_1 = require("./registry");
const addUsersUseCaseImpl_1 = require("./useCase/addUsers/addUsersUseCaseImpl");
const retrieveUsersUseCaseImpl_1 = require("./useCase/retrieveUsers/retrieveUsersUseCaseImpl");
let registry = new registry_1.EndpointRegistry();
registry.get(endpoints_1.ROOT, new retrieveUsersUseCaseImpl_1.retrieveUsersUseCase());
registry.post(endpoints_1.ROOT, new addUsersUseCaseImpl_1.addUsersUseCaseImpl());
registry.start();
//# sourceMappingURL=index.js.map