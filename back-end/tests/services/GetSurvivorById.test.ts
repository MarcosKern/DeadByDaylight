import { expect } from "chai";
import { Model } from "sequelize";
import Sinon from "sinon"
import ICharacter from "../../src/api/interfaces/ICharacter";
import SurvivorService from "../../src/api/services/SurvivorService";
import Survivor from "../../src/database/models/Survivor";

describe('Testing service: New Survivor', function() {
  afterEach(function() {
    Sinon.restore();
  })

  it('Case 1: Must find an survivor', async function () {
    const outputMock: Survivor = new Survivor({
      id: 1,
      name: 'Dwight Fairfield',
      imageUrl: 'sample:/url',
      lore: 'Random generyc lore',
      dlc: undefined,
    })

    // WHEN

    Sinon.stub(Model, 'findOne').resolves(outputMock);
    const service = new SurvivorService();
    const result = await service.findById(1);

    // THEN
    expect(result).to.be.equal(outputMock);
  });

  it('Case 2: Must get an error whit invalid id', async function () {
    const outputMock: Survivor = new Survivor({
      id: 1,
      name: 'Dwight Fairfield',
      imageUrl: 'sample:/url',
      lore: 'Random generyc lore',
      dlc: undefined,
    })

    // WHEN

    Sinon.stub(Model, 'findOne').resolves(outputMock);
    const service = new SurvivorService();
    const result = await service.findById(2);

    // THEN
    expect(result).to.be.equal(outputMock);
  })
})