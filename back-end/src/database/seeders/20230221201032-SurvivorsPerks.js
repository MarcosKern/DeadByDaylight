'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('survivor_perks', [
      {
        name: 'Bond',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8c/Bond.gif/revision/latest?cb=20200926195146',
        survivor_id: 1,
      },
      {
        name: 'Prove Thyself',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4e/ProveThyself.gif/revision/latest?cb=20200501133526',
        survivor_id: 1,
      },
      {
        name: 'Leader',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7a/Leader.gif/revision/latest?cb=20200926195734',
        survivor_id: 1,
      },
      {
        name: 'Quick & Quiet',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/05/QuickAndQuiet.gif/revision/latest?cb=20200926201002',
        survivor_id: 2,
      },
      {
        name: 'Sprint Burst',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/SprintBurst.gif/revision/latest?cb=20200926200201',
        survivor_id: 2,
      },
      {
        name: 'Adrenaline',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/af/Adrenaline.gif/revision/latest?cb=20200926194941',
        survivor_id: 2,
      },
      {
        name: 'Empathy',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/48/Empathy.gif/revision/latest?cb=20200926195403',
        survivor_id: 3,
      },
      {
        name: 'Botany Knowledge',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/BotanyKnowledge.gif/revision/latest?cb=20200501133543',
        survivor_id: 3,
      },
      {
        name: 'Self-Care',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/86/Self-Care.gif/revision/latest?cb=20200926200040',
        survivor_id: 3,
      },
      {
        name: 'Wiretap',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b1/Wiretap.gif/revision/latest?cb=20220816132234',
        survivor_id: 4,
      },
      {
        name: 'Reactive Healing',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f3/ReactiveHealing.gif/revision/latest?cb=20220816132208',
        survivor_id: 4,
      },
      {
        name: 'Low Profile',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/37/LowProfile.gif/revision/latest?cb=20220816132203',
        survivor_id: 4,
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('survivor_perks', null, {})
  }
};
