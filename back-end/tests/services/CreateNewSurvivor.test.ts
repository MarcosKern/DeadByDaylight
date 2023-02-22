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

  it('Case 1: Must create new survivor', async function () {
    const inputMock: ICharacter = {
      name: 'Dwight Fairfield',
      imageUrl: 'sample:/url',
      lore: 'Random generyc lore',
    }
    const outputMock: Survivor = new Survivor({
      id: 1,
      name: 'Dwight Fairfield',
      imageUrl: 'sample:/url',
      lore: 'Random generyc lore',
      dlc: undefined,
    })

    // WHEN

    Sinon.stub(Model, 'create').resolves(outputMock);
    const service = new SurvivorService();
    const result = await service.create(inputMock);

    // THEN
    expect(result).to.be.equal(outputMock);
  })
})