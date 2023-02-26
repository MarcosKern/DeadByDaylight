import React from 'react'
import '../styles/game.scss'

export default function Game() {
  return (
    <div className='gamePage'>
      <div>
        <p>Dead by Daylight is a multiplayer (4vs1) survival horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.</p>
      </div>
      <div className='aboutKillers'>
        <p> The Killers have been tasked by The Entity to hunt down and sacrifice every survivor before they can escape. <br/> In order to achieve this objective, a Killer should patrol the area and find Survivors, catch them and carry to a sacrificial hook for the entity to consume.</p>
        <img src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/06/IconHelpLoading_killer.png" alt="killer icon" />
      </div>
      <div className='aboutSurvivors'>
        <img src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b3/IconHelpLoading_survivor.png" alt="survivor icon" />
        <p>  The Survivors' task is to try and escape from the Realms of The Entity in which they are trapped.<br/> They must work together to repair 5 generators to power on the gates, once powered the survivors must open the gate and escape the realm. </p>
      </div>
    </div>
  )
}
