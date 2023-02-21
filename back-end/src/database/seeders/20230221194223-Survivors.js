'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert('Survivors',[
      {
        name: 'Dwight Fairfield',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5c/New_Store_Dwight.png/revision/latest/scale-to-width-down/257?cb=20220325045357',
        lore: 'An unlikely leader forced to rise to the occasion, Dwight Fairfield’s reluctant bravery inspires those around him. Understanding the value of teamwork, Dwight is adept at locating and bolstering the efficiency of his teammates.'
      },
      {
        name: 'Meg Thomas',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c8/New_Store_Meg.png/revision/latest?cb=20220325045523',
        lore: 'Driven by reckless courage, the athletic Meg Thomas has never been afraid to push her limits. Prone to stepping up in the clutch, Meg gets a thrill out of goading Killers into lengthy chases, buying essential time for her teammates.'
      },
      {
        name: 'Claudette Morel',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3f/New_Store_Claudette.png/revision/latest?cb=20220325045338',
        lore: 'Claudette understands the value of altruism, using her aptitude for botany to ensure her teammates are prepared for the challenges ahead. An expert healer to herself and others, Claudette’s supportive presence is always welcome.'
      },
      {
        name: 'Ada Wong',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d3/New_Store_Ada.png/revision/latest?cb=20220830161534',
        lore: 'Sometimes it’s safer to keep people guessing, and no one knows this better than Ada Wong. Dexterous and enigmatic, Ada’s survival skills make her a valuable ally, provided interests remain aligned.',
        dlc: 'Resident Evil™: PROJECT W',
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Survivors', null, {})
  }
};
