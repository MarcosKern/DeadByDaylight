import { expect } from 'chai';
import { Model } from 'sequelize';
import Sinon from 'sinon';
import SurvivorService from '../../src/api/services/SurvivorService';
import Survivor from '../../src/database/models/Survivor';
describe('Testing service: get all survivors', function() {
  afterEach(function() {
    Sinon.restore();
  })

  it('Case 1: Get all survivors correctly', async function() {
    const outputMock: Survivor[] = [new Survivor({
      id: 1,
      name: 'Dwight Fairfield',
      imageUrl: 'sample:/url',
      lore: 'Random generyc lore',
      dlc: undefined,
    })];

    // WHEN
    Sinon.stub(Model, 'findAll').resolves(outputMock);
    const service = new SurvivorService();
    const result = await service.getAll();

    // THEN
    expect(result).to.be.equal(outputMock);
    expect(result.length).to.be.equal(1);
  });
});