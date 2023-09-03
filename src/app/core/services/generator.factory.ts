import { GeneratorService } from "./generator.service";

export function GeneratorFactory(generatorService: GeneratorService): (stringLength: number) => string {
  return (stringLength: number) => generatorService.generate(stringLength);
}