export function renderCharacter(character) {
  return <section>
    <div className='characterInfos'>
      { character.music !== null && <iframe width="853" height="480" src={`https://www.youtube.com/embed/${character.music}?autoplay=1&loop=1`} title="Dead By Dayligh OST - Survivors Theme [1 hour version]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" hidden /> }
      <div className="characterNameDlc">
        <h1 className='characterName'>{ character.name }</h1>
        { character.dlc !== null && <h2 className="dlc">DLC: { character.dlc }</h2>}
      </div>
      <img className='characterImage' src={ character.imageUrl } alt={`${character.name}`} />
      <div className='characterPerks'>
        { character.perks.map((perk, index) => {
          return <div key={index} >
              <img className='perk' src={perk.imageUrl} alt={perk.perkName} />
            </div>
        }) }
      </div>
    </div>
    <div className="characterHistory">
      <h2>Lore</h2>
      <p>{ character.description }</p>
      <p className='lore'>{ character.lore }</p>
    </div>
  </section>
}