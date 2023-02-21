'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert('Killers',[
      {
        name: 'Evan MacMillan - The Trapper',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d0/New_Store_Trapper.png/revision/latest?cb=20220325045941',
        lore: `Armed with a bag of Bear Traps, The Trapper specialises in catching unsuspecting Survivors.
        By placing traps in high-traffic areas and thick patches of grass, he creates a deadly area that forces Survivors to move with caution.
        When dealing with The Trapper, a simple misstep can prove fatal.`
      },
      {
        name: 'Sally Smithson - The Nurse',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/00/New_Store_Nurse.png/revision/latest?cb=20220325045802',
        lore: 'Using her Blink ability, The Nurse can teleport great distances in moments, predicting and cutting off Survivor routes. A powerful process best honed by experience, careless Blinks are punished with a wave of fatigue. The epitome of high risk, high reward, The Nurse can end chases with surgical precision.'
      },
      {
        name: 'Michael Myers  The Shape',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/33/New_Store_Shape.png/revision/latest?cb=20220325045914',
        lore: 'The Shape lurks in the distance, patiently biding his time. His evil builds while stalking Survivors, fueling him with malevolent power. As the trial progresses, The Shape evolves from a quiet menace to an unstoppable juggernaut capable of shredding through even the most resilient teams.',
        dlc: 'The HALLOWEEN® Chapter',
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Killers', null, {})
  }
};
