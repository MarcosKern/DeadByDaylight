'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('survivor_perks', [
      {
        name: 'Bond',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/Bond.gif',
        survivor_id: 1,
      },
      {
        name: 'Prove Thyself',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4e/ProveThyself.gif',
        survivor_id: 1,
      },
      {
        name: 'Leader',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7a/Leader.gif',
        survivor_id: 1,
      },
      {
        name: 'Quick & Quiet',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/05/QuickAndQuiet.gif',
        survivor_id: 2,
      },
      {
        name: 'Sprint Burst',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/SprintBurst.gif',
        survivor_id: 2,
      },
      {
        name: 'Adrenaline',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/af/Adrenaline.gif',
        survivor_id: 2,
      },
      {
        name: 'Empathy',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/48/Empathy.gif',
        survivor_id: 3,
      },
      {
        name: 'Botany Knowledge',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/BotanyKnowledge.gif',
        survivor_id: 3,
      },
      {
        name: 'Self-Care',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/86/Self-Care.gif',
        survivor_id: 3,
      },
      {
        name: 'Wiretap',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b1/Wiretap.gif',
        survivor_id: 4,
      },
      {
        name: 'Reactive Healing',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f3/ReactiveHealing.gif',
        survivor_id: 4,
      },
      {
        name: 'Low Profile',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/37/LowProfile.gif',
        survivor_id: 4,
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('survivor_perks', null, {})
  }
};
