'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert('killers',[
      {
        name: 'Evan MacMillan - The Trapper',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d0/New_Store_Trapper.png',
        description: 'Armed with a bag of Bear Traps, The Trapper specialises in catching unsuspecting Survivors. By placing traps in high-traffic areas and thick patches of grass, he creates a deadly area that forces Survivors to move with caution. When dealing with The Trapper, a simple misstep can prove fatal.',
        lore: `Evan MacMillan idolised his father. It wasn't just that he was heir to a great fortune, it was the way he ran the estate. Raised under his firm hand, Evan had taken to running the workforce with an iron hand. Production was always high and the MacMillan Estate prospered under father and son.

        As Archie MacMillan's mental health slowly disintegrated, Evan protected him from the herd who wanted a piece of the fortune. No matter what his father asked of him, Evan would do.
        
        When Archie MacMillan finally snapped, Evan became his enforcer in what would become known as the worst mass murder in modern history. They never proved that Evan lead over a hundred men into those dark tunnels before detonating the explosives and sealing them to their fate. The tale of the MacMillan Estate is a tale of wealth and power gone very wrong.
        
        How many victims fell to the hands of father and son is unknown. No record is ever made of what became of Evan MacMillan. His father is another unsolved puzzle, found trapped in the locked basement of his own warehouse - starved and abandoned.`
      },
      {
        name: 'Sally Smithson - The Nurse',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/00/New_Store_Nurse.png',
        description: 'Using her Blink ability, The Nurse can teleport great distances in moments, predicting and cutting off Survivor routes. A powerful process best honed by experience, careless Blinks are punished with a wave of fatigue. The epitome of high risk, high reward, The Nurse can end chases with surgical precision.',
        lore: `Sally Smithson came to town with dreams of children's feet and laughter in a wooden home built by her husband Andrew. But life came not with smiles but with plans of destruction. Andrew worked as a lumberjack - a job with its perils. One day, Andrew's foreman had to pay Sally a visit, forever changing her life. She was alone.

        Without food on the table and no other option, Sally had to find a way, but the only employment she could get was at the Crotus Prenn Asylum. Nobody sought employment there unless they were in dire need. Just like Sally. Without any education, she started at the bottom, doing the hard night shift.
        
        Over the years, her mind had reached its limits, two decades of seeing horrid things that violate the eyes. Memories that are re-played every night. Being abused verbally and physically, by people without limits. Sally saw insanity from the outside, just to catch it herself.
        
        Finally she could not take it any more and concepts of purification emerged inside her. She did what she felt was necessary. As the morning staff arrived one day in September - they found over fifty dead patients, lifeless, in their bed along four staff members, also dead.
        
        Only Sally had survived the night, but her mind was gone, rocking back and forth non-stop. Exactly what happened is only known by her, but it seems that some of them had been choked as they had marks around their necks. They got her into an ambulance, but that ambulance never reached the hospital. It was found crashed in a nearby wood, all the staff dead and Sally nowhere to be found.`
      },
      {
        name: 'Michael Myers  The Shape',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/33/New_Store_Shape.png',
        description: 'The Shape lurks in the distance, patiently biding his time. His evil builds while stalking Survivors, fueling him with malevolent power. As the trial progresses, The Shape evolves from a quiet menace to an unstoppable juggernaut capable of shredding through even the most resilient teams.',
        lore: `Some humans are simply bad seeds. Seeds infused with a distilled and pure form of evil.

        Michael Myers is one of those seeds. He had no issues with causing the pain of others. Instead, it was exactly what he sought. But even life can be tough on those with minds filled with terror. The difference is just how one goes about to solve those problems. For Michael, he had to kill to find some inner peace. As he took his sister’s life, the police found a silent boy dressed as a clown at the scene.
        
        When one stumbles upon a growing fire, one does not pour gasoline on it. But this was an action taken by officials that had no idea how it would shape this demon in the boy's body. Sending Michael to a mental institution was a feeble attempt to save the child. Unsuccessful therapy and nightly screams just made him even more introverted and deranged.
        
        People hoped that Michael Myers would end up a parenthesis, soon to be forgotten and buried, a failure that soon were to rot away. But then...he escaped.`,
        dlc: 'The HALLOWEEN® Chapter',
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('killers', null, {})
  }
};
