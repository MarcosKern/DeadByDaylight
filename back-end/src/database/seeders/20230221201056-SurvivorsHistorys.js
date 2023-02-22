'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('survivor_history', [
      {
        survivor_id: 1,
        history: 'Dwight was geeky and scrawny through high school. He always wanted to be one of the cool kids, but somehow never had the charisma. He tried out for the football team but was cut, the basketball team didn\'t even take a look, and his grades were distinctly below average. One weekend, on a team-building exercise from his dead-end job, Dwight\'s boss led them deep into the woods before breaking out his family recipe moonshine. Dwight remembered taking the first sip before waking up late the next morning all alone. During the night, the others had abandoned him. Once again, the laughing stock of the community Dwight tried to hike his way out of the woods. That was the last anyone ever heard of Dwight Fairfield.',
      },
      {
        survivor_id: 2,
        history: 'Perhaps it was her mother that had instilled the fierce streak in her or maybe it was her father that left them when she was a baby. Meg excelled at schoolwork but she was off the rails. Fortunately, an athletics coach encouraged her to channel her misspent energy on the track. She motivated herself into becoming a high school star and earned a scholarship to college. When her mother fell ill, Meg decided to give up her chance at college to care for the woman who had raised her. One summer’s day, on a long run deep in the woods, Meg vanished. Search as they did, they never found her body.'
      },
      {
        survivor_id: 3,
        history: 'From the day that her parents gave Claudette her first science kit, she loved experiments. Her single-minded pursuit lead to an early scholarship at a great college. It was a huge decision to leave Montreal, but the chance was too good to pass up. Her introverted nature means that chat rooms and forums are now her best source of social interaction. Her new favourite activity is to answer botany questions for others under her new moniker of Science Girl. One evening, during a long bus ride back from the city, Claudette took a stroll that would change her life. It only took a minute for her to get completely disoriented in the thick woods. She never found her way back. Her forum only started to wonder where she was a week after she stopped posting.'
      },
      {
        survivor_id: 4,
        history: 'Everything about Ada Wong was an enigma. Her history, her nationality, her allegiances, her motives, even her real name was a mystery. Was she a corporate spy working against the Umbrella corporation? Was she loyal to Albert Wesker? Or was she a double agent? And why was she after the Las Plagas parasite? Clearly, she was a trained assassin. A weapons expert with advanced martial arts training. While investigating Los Illuminados, she was captured and nearly killed in a ritual sacrifice. But in the end, she escaped and was never seen again. That, too, was an enigma.'
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('survivor_history', null, {})
  }
};
