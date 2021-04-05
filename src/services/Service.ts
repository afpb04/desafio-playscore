import { injectable } from "tsyringe";

interface IRequest {
  marketStatus: string;
  price: number;
  founds: number;
  size: number;
}

@injectable()
class Service {
  async execute({
    marketStatus,
    price,
    size,
    founds,
  }: IRequest): Promise<string> {
    if (marketStatus !== "OPEN") {
      throw new Error("REJECT");
    }
    if (size >= founds * 0.1) {
      throw new Error("REJECT");
    }
    if (price >= 1.01 && price <= 1000) {
      throw new Error("REJECT");
    }
    return "ACCEPT";
  }
}

export default Service;
