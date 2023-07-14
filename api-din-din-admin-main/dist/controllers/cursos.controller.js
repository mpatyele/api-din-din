"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_json_1 = __importDefault(require("../models/cursos.json"));
const fs_1 = __importDefault(require("fs"));
const CursoController = {
    cadastrarCurso(req, res) {
        cursos_json_1.default;
        const { titulo, descricao, professor } = req.body;
        if (!titulo || !descricao || !professor) {
            return res
                .status(400)
                .json({ error: "Você precisa passar os atributos corretamente" });
        }
        cursos_json_1.default.push({
            titulo,
            descricao,
            professor,
        });
        fs_1.default.writeFileSync("./models/cursos.json", JSON.stringify(cursos_json_1.default));
        res.status(201).json({ message: "Cadastro efetuado com sucesso!" });
    },
};
exports.default = CursoController;
