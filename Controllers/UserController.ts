import { Request, Response } from 'express';

export class SeuController {
  
  
  async index(req: Request, res: Response): Promise<Response> {
    try {
     
      return res.status(200).json({ message: "Lista obtida com sucesso", data: [] });
    } catch (error: any) {
      return res.status(500).json({ error: error.message || "Erro interno do servidor" });
    }
  }

 
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      
      return res.status(200).json({ id, message: "Item encontrado" });
    } catch (error: any) {
      return res.status(404).json({ error: "Recurso não encontrado" });
    }
  }

  
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const bodyData = req.body;
     
      return res.status(201).json({ message: "Criado com sucesso", data: bodyData });
    } catch (error: any) {
      return res.status(400).json({ error: error.message || "Erro de validação dos dados" });
    }
  }

  
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const bodyData = req.body;
      
      return res.status(200).json({ id, message: "Atualizado com sucesso", data: bodyData });
    } catch (error: any) {
      return res.status(400).json({ error: error.message || "Erro ao atualizar recurso" });
    }
  }

  
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message || "Erro ao deletar recurso" });
    }
  }
}
