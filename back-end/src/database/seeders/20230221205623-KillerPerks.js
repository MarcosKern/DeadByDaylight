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
        name: 'Predator',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b1/Predator.gif',
        killer_id: 2,
      },
      {
        name: 'Bloodhound',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0e/Bloodhound.gif',
        killer_id: 2,
      },
      {
        name: 'Shadowborn',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/ba/Shadowborn.gif',
        killer_id: 2,
      },
      {
        name: 'Enduring',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cd/Enduring.gif',
        killer_id: 3,
      },
      {
        name: 'Lightborn',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fc/Lightborn.gif',
        killer_id: 3,
      },
      {
        name: 'Tinkerer',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/94/Tinkerer.gif',
        killer_id: 3,
      },
      {
        name: 'Stridor',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/95/Stridor.gif',
        killer_id: 4,
      },
      {
        name: 'Thanatophobia',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/Thanatophobia.gif',
        killer_id: 4,
      },
      {
        name: 'A Nurse\'s Calling',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/eb/ANursesCalling.gif',
        killer_id: 4,
      },
      {
        name: 'Save the Best for Last',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1f/SaveTheBestForLast.gif',
        killer_id: 5,
      },
      {
        name: 'Play with Your Food',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/44/PlayWithYourFood.gif',
        killer_id: 5,
      },
      {
        name: 'Dying Light',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3e/DyingLight.gif',
        killer_id: 5,
      },
      {
        name: 'Hex: The Third Seal',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/HexTheThirdSeal.gif',
        killer_id: 6,
      },
      {
        name: 'Hex: Ruin',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d0/HexRuin.gif',
        killer_id: 6,
      },
      {
        name: 'Hex: Devour Hope',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bc/HexDevourHope.gif',
        killer_id: 6,
      },
      {
        name: 'Overwhelming Presence',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d0/OverwhelmingPresence.gif',
        killer_id: 7,
      },
      {
        name: 'Monitor & Abuse',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a3/MonitorAndAbuse.gif',
        killer_id: 7,
      },
      {
        name: 'Overcharge',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/Overcharge.gif',
        killer_id: 7,
      },
      {
        name: 'Beast of Prey',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4d/BeastOfPrey.gif',
        killer_id: 8,
      },
      {
        name: 'Territorial Imperative',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/69/TerritorialImperative.gif',
        killer_id: 8,
      },
      {
        name: 'Hex: Huntress Lullaby',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b8/HexHuntressLullaby.gif',
        killer_id: 8,
      },
      {
        name: 'Knock Out',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/99/KnockOut.gif',
        killer_id: 9,
      },
      {
        name: 'Barbecue & Chilli',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/28/BarbecueAndChilli.gif',
        killer_id: 9,
      },
      {
        name: 'Franklin´s Demise',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c3/FranklinsDemise.gif',
        killer_id: 9,
      },
      {
        name: 'Fire Up',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e5/FireUp.gif',
        killer_id: 10,
      },
      {
        name: 'Remember Me',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/00/RememberMe.gif',
        killer_id: 10,
      },
      {
        name: 'Blood Warden',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/95/BloodWarden.gif',
        killer_id: 10,
      },
      {
        name: 'Hangman´s Trick',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/05/HangmansTrick.gif',
        killer_id: 11,
      },
      {
        name: 'Surveillance',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/Surveillance.gif',
        killer_id: 11,
      },
      {
        name: 'Make Your Choice',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/ca/MakeYourChoice.gif',
        killer_id: 11,
      },
      {
        name: 'Bamboozle',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c3/Bamboozle.gif',
        killer_id: 12,
      },
      {
        name: 'Coulrophobia',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a6/Coulrophobia.gif',
        killer_id: 12,
      },
      {
        name: 'Pop Goes the Weasel',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/69/PopGoesTheWeasel.gif',
        killer_id: 12,
      },
      {
        name: 'Spirit Fury',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/SpiritFury.gif',
        killer_id: 13,
      },
      {
        name: 'Hex: Haunted Ground',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e9/HexHauntedGround.gif',
        killer_id: 13,
      },
      {
        name: 'Rancor',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0b/Rancor.gif',
        killer_id: 13,
      },
      {
        name: 'Discordance',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f8/Discordance.gif',
        killer_id: 14,
      },
      {
        name: 'Mad Grit',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d3/MadGrit.gif',
        killer_id: 14,
      },
      {
        name: 'Iron Maiden',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9b/IronMaiden.gif',
        killer_id: 14,
      },
      {
        name: 'Corrupt Intervention',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d7/CorruptIntervention.gif',
        killer_id: 15,
      },
      {
        name: 'Infectious Fright',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/dd/InfectiousFright.gif',
        killer_id: 15,
      },
      {
        name: 'Dark Devotion',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/73/DarkDevotion.gif',
        killer_id: 15,
      },
      {
        name: 'I´m All Ears',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3b/ImAllEars.gif',
        killer_id: 16,
      },
      {
        name: 'Thrilling Tremors',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6d/ThrillingTremors.gif',
        killer_id: 16,
      },
      {
        name: 'Furtive Chase',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3c/FurtiveChase.gif',
        killer_id: 16,
      },
      {
        name: 'Surge',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/83/Surge.gif',
        killer_id: 17,
      },
      {
        name: 'Cruel Limits',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c4/CruelLimits.gif',
        killer_id: 17,
      },
      {
        name: 'Mindbreaker',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/21/Mindbreaker.gif',
        killer_id: 17,
      },
      {
        name: 'Zanshin Tactics',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/dc/ZanshinTactics.gif',
        killer_id: 18,
      },
      {
        name: 'Blood Echo',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ec/BloodEcho.gif',
        killer_id: 18,
      },
      {
        name: 'Nemesis',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1b/Nemesis.gif',
        killer_id: 18,
      },
      {
        name: 'Gearhead',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9c/Gearhead.gif',
        killer_id: 19,
      },
      {
        name: 'Dead Man´s Switch',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/42/DeadMansSwitch.gif',
        killer_id: 19,
      },
      {
        name: 'Hex: Retribution',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b5/HexRetribution.gif',
        killer_id: 19,
      },
      {
        name: 'Forced Penance',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8d/ForcedPenance.gif',
        killer_id: 20,
      },
      {
        name: 'Trail of Torment',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/TrailOfTorment.gif',
        killer_id: 20,
      },
      {
        name: 'Deathbound',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0b/Deathbound.gif',
        killer_id: 20,
      },
      {
        name: 'Dragon´s Grip',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7f/DragonsGrip.gif',
        killer_id: 21,
      },
      {
        name: 'Hex: Blood Favour',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bd/HexBloodFavour.gif',
        killer_id: 21,
      },
      {
        name: 'Hex: Undying',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/de/HexUndying.gif',
        killer_id: 21,
      },
      {
        name: 'Hoarder',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b1/Hoarder.gif',
        killer_id: 22,
      },
      {
        name: 'Oppression',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cf/Oppression.gif',
        killer_id: 22,
      },
      {
        name: 'Coup de Grâce',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/CoupDeGrace.gif',
        killer_id: 22,
      },
      {
        name: 'Starstruck',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f2/Starstruck.gif',
        killer_id: 23,
      },
      {
        name: 'Hex: Crowd Control',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2e/HexCrowdControl.gif',
        killer_id: 23,
      },
      {
        name: 'No Way Out',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d1/NoWayOut.gif',
        killer_id: 23,
      },
      {
        name: 'Lethal Pursuer',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/03/LethalPursuer.gif',
        killer_id: 24,
      },
      {
        name: 'Hysteria',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/20/Hysteria.gif',
        killer_id: 24,
      },
      {
        name: 'Eruption',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/Eruption.gif',
        killer_id: 24,
      },
      {
        name: 'Deadlock',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/56/Deadlock.gif',
        killer_id: 25,
      },
      {
        name: 'Hex: Plaything',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d5/HexPlaything.gif',
        killer_id: 25,
      },
      {
        name: 'Scourge Hook: Gift of Pain',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/86/ScourgeHookGiftOfPain.gif',
        killer_id: 25,
      },
      {
        name: 'Grim Embrace',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0e/GrimEmbrace.gif',
        killer_id: 26,
      },
      {
        name: 'Scourge Hook: Pain Resonance',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/80/ScourgeHookPainResonance.gif',
        killer_id: 26,
      },
      {
        name: 'Hex: Pentimento',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e0/HexPentimento.gif',
        killer_id: 26,
      },
      {
        name: 'Scourge Hook: Floods of Rage',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/ScourgeHookFloodsOfRage.gif',
        killer_id: 27,
      },
      {
        name: 'Call of Brine',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/97/CallOfBrine.gif',
        killer_id: 27,
      },
      {
        name: 'Merciless Storm',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7d/MercilessStorm.gif',
        killer_id: 27,
      },
      {
        name: 'Dissolution',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/92/Dissolution.gif',
        killer_id: 28,
      },
      {
        name: 'Darkness Revealed',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/04/DarknessRevealed.gif',
        killer_id: 28,
      },
      {
        name: 'Septic Touch',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a6/SepticTouch.gif',
        killer_id: 28,
      },
      {
        name: 'Superior Anatomy',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/98/SuperiorAnatomy.gif',
        killer_id: 29,
      },
      {
        name: 'Awakened Awareness',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/22/AwakenedAwareness.gif',
        killer_id: 29,
      },
      {
        name: 'Terminus',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c8/Terminus.gif',
        killer_id: 29,
      },
      {
        name: 'Nowhere to Hide',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/98/NowhereToHide.gif',
        killer_id: 30,
      },
      {
        name: 'Hex: Face the Darkness',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/86/HexFaceTheDarkness.gif',
        killer_id: 30,
      },
      {
        name: 'Hubris',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9d/Hubris.gif',
        killer_id: 30,
      },
      {
        name: 'THWACK!',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/Thwack.gif',
        killer_id: 31,
      },
      {
        name: 'Leverage',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c5/Leverage.gif',
        killer_id: 31,
      },
      {
        name: 'Game Afoot',
        image_url: 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c4/GameAfoot.gif',
        killer_id: 31,
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('killer_perks', null, {})
  }
};

// {
//   name: '',
//   image_url: '',
//   killer_id: ,
// },