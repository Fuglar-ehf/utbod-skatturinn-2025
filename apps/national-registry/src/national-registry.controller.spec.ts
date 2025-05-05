import { Test, TestingModule } from '@nestjs/testing';
import { NationalRegistryController } from './national-registry.controller';
import { NationalRegistryService } from './national-registry.service';

describe('NationalRegistryController', () => {
  let nationalRegistryController: NationalRegistryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NationalRegistryController],
      providers: [NationalRegistryService],
    }).compile();

    nationalRegistryController = app.get<NationalRegistryController>(NationalRegistryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nationalRegistryController.getHello()).toBe('Hello World!');
    });
  });
});
