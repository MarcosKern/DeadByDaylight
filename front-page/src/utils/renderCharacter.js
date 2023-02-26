export function renderCharacter(character) {
  return <section>
    <div className='characterInfos'>
      <h1 className='characterName'>{ character.name }</h1>
      { character.dlc !== null && <h2 className="dlc">DLC: { character.dlc }</h2>}
      <img className='characterImage' src={ character.imageUrl } alt={`${character.name}`} />
      <div className='characterPerks'>
        { character.perks.map((perk, index) => {
          return <img className='perk' src={perk.imageUrl} alt={perk.perkName} key={index} />
        }) }
      </div>
    </div>
    <div>
      <p>{ character.description }</p>
      <p>{ character.lore }</p>
    </div>
  </section>
}