import { Request, Response } from "express";
import { container } from "tsyringe";

import Service from "../services/Service";

class Controller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { marketStatus, price, founds, size } = request.body;

    const service = container.resolve(Service);

    try {
      const result = await service.execute({
        marketStatus,
        price,
        founds,
        size,
      });
      return response.json({ message: result });
    } catch (err) {
      return response.json({ message: err.message });
    }
  }
}
export default Controller;
