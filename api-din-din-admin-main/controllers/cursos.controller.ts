import {Request, Response} from "express"

import listaDeCursos from "../models/cursos.json";
import fs from "fs";

interface Cursos {
  titulo: string,
  descricao: string,
  professor:string
}


const CursoController = {
  cadastrarCurso(req: Request, res: Response) {
    listaDeCursos as Cursos[]
    const { titulo, descricao, professor } = req.body;

    if (!titulo || !descricao || !professor) {
      return res
        .status(400)
        .json({ error: "Você precisa passar os atributos corretamente" });
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor,
    });

    fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

    res.status(201).json({ message: "Cadastro efetuado com sucesso!" });
  },
};

export default CursoController;
