import "reflect-metadata";
import Service from "./Service";

let service: Service;

describe("Create", () => {
  beforeEach(() => {
    service = new Service();
  });
  it("should be able return ACCEPT", async () => {
    const result = await service.execute({
      marketStatus: "OPEN",
      price: 1001,
      founds: 11,
      size: 1,
    });
    expect(result).toBe("ACCEPT");
  });
  it("should be able return REJECT to marketStatus equals to CLOSE", async () => {
    try {
      expect(
        await service.execute({
          marketStatus: "CLOSE",
          price: 1001,
          founds: 11,
          size: 1,
        })
      ).not.toBe("ACCEPT");
    } catch (error) {
      expect(error.message).toBe("REJECT");
    }
  });
  it("should be able return REJECT to size equal to or greater than 10% of founds", async () => {
    try {
      expect(
        await service.execute({
          marketStatus: "OPEN",
          price: 1001,
          founds: 11,
          size: 2,
        })
      ).not.toBe("ACCEPT");
    } catch (error) {
      expect(error.message).toBe("REJECT");
    }
  });
  it("should be able return REJECT to if the price is 1.01 or 1000", async () => {
    try {
      expect(
        await service.execute({
          marketStatus: "OPEN",
          price: 1000,
          founds: 11,
          size: 1,
        })
      ).not.toBe("ACCEPT");
    } catch (error) {
      expect(error.message).toBe("REJECT");
    }
  });
});
