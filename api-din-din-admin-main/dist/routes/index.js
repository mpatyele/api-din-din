"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cursos_controller_1 = __importDefault(require("../controllers/cursos.controller"));
const routes = express_1.default.Router();
routes.post("/cursos", cursos_controller_1.default.cadastrarCurso);
exports.default = routes;
