
function Character({ character }) {
    return (
        <div className="text-center  p-5 border m-3 rounded">
            <h3 className="pt-3 pb-3 ">{character.name}</h3>
            <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
            <p className="pt-3">Origin: {character.origin.name}</p>
            <p>Specie: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    )
}

export default Character