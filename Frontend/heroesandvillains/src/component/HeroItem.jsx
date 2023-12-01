export default function HeroItem({ hero, setRefresh }) {
  //# löschen
  function deleteCharacter() {
    console.log(hero.name, "gelöscht");
    fetch("http://localhost:9898/api/characters", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: hero.id }),
    })
      .then(() => {
        setRefresh((prev) => !prev);
      })
      .catch(() => console.log("klappt nicht"));
  }

  return (
    <div className="heroitem">
      {hero.imglink && <img src={hero.imglink} alt={hero.name} />}
      <div>
        <p>{hero.name}</p>
        <p>{hero.race}</p>
        <p>{hero.superpower}</p>
        <p>{hero.universe}</p>
        <p>{hero.type}</p>
        <button className="muell" onClick={deleteCharacter}>
          🗑
        </button>
      </div>
    </div>
  );
}
