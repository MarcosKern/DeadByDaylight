import { expect } from "chai";
import { Model } from "sequelize";
import Sinon from "sinon"
import SurvivorService from "../../src/api/services/SurvivorService";
import Survivor from "../../src/database/models/Survivor";

const outputMock: Survivor = new Survivor({
  id: 1,
  name: 'Dwight Fairfield',
  imageUrl: 'sample:/url',
  lore: 'Random generyc lore',
  dlc: undefined,
})

describe('Testing service: New Survivor', function() {
  afterEach(function() {
    Sinon.restore();
  })

  it('Case 1: Must find an survivor', async function () {
    // WHEN

    Sinon.stub(Model, 'findByPk').resolves(outputMock);
    const service = new SurvivorService();
    const result = await service.findById(1);

    // THEN
    expect(result).to.be.equal(outputMock.dataValues);
  });

  it('Case 2: Must get an error whit invalid id', async function () {
    // WHEN

    Sinon.stub(Model, 'findByPk');
    const service = new SurvivorService();

    // THEN
    try {
      await service.findById(2)
    } catch(err) {
      expect(err).to.eql(Error('Invalid ID'));
    }
  })
})