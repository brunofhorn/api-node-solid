import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { FetchNearbyGymsUseCase } from "./fetch-nearby-gyms";

let gymsRepository: InMemoryGymsRepository;
let sut: FetchNearbyGymsUseCase;

describe("Fetch Nearby Gyms Use Case", () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new FetchNearbyGymsUseCase(gymsRepository);
  });

  it("should be able to fetch nearby gyms", async () => {
    await gymsRepository.create({
      title: "Near Gym",
      description: "",
      phone: "",
      latitude: -27.6023308,
      longitude: -48.6088232,
    });

    await gymsRepository.create({
      title: "Far Gym",
      description: "",
      phone: "",
      latitude: -27.642324,
      longitude: -48.7762051,
    });

    const { gyms } = await sut.execute({
      userLatitude: -27.5985258,
      userLongitude: -48.6120395,
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([expect.objectContaining({ title: "Near Gym" })]);
  });
});
