'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('killer_perks', [
      {
        name: 'Unnerving Presence',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/de/UnnervingPresence.gif',
        killer_id: 1,
      },
      {
        name: 'Brutal Strength',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e8/BrutalStrength.gif',
        killer_id: 1,
      },
      {
        name: 'Agitation',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/07/Agitation.gif',
        killer_id: 1,
      },
      {
        name: 'Stridor',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/95/Stridor.gif',
        killer_id: 2,
      },
      {
        name: 'Thanatophobia',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/Thanatophobia.gif',
        killer_id: 2,
      },
      {
        name: 'A Nurse\'s Calling',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/eb/ANursesCalling.gif',
        killer_id: 2,
      },
      {
        name: 'Save the Best for Last',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1f/SaveTheBestForLast.gif',
        killer_id: 3,
      },
      {
        name: 'Play with Your Food',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/44/PlayWithYourFood.gif',
        killer_id: 3,
      },
      {
        name: 'Dying Light',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3e/DyingLight.gif',
        killer_id: 3,
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('killer_perks', null, {})
  }
};
