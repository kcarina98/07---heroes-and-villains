import { useRef, useState } from "react";

export default function AddHero({ setRefresh }) {
  const [theme, setTheme] = useState(true);

  const nameRef = useRef();
  const universeRef = useRef();
  const superpowerRef = useRef();
  const raceRef = useRef();
  const typeRef = useRef();
  const imgRef = useRef();
  const idRef = useRef();
  const buttonRef = useRef();

  function save() {
    const hero = {
      name: nameRef.current.value,
      universe: universeRef.current.value,
      superpower: superpowerRef.current.value,
      race: raceRef.current.value,
      type: typeRef.current.value,
      imglink: imgRef.current.value,
    };

    console.log(hero);

    fetch("http://localhost:9898/api/characters", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(hero),
    }).then((response) => {
      if (response.ok) {
        nameRef.current.value = "";
        universeRef.current.value = "";
        superpowerRef.current.value = "";
        raceRef.current.value = "";
        typeRef.current.value = "";
        imgRef.current.value = "";
        setRefresh((prev) => !prev);
      }
    });
  }

  //  * Backgroundcolor vom Button ändert sich je nach Hero/Villain
  function changeType() {
    setTheme((theme) => !theme);
  }

  return (
    <section>
      <div>
        <input ref={nameRef} type="text" id="heroName" placeholder="Name" />
      </div>
      <div>
        <input
          ref={universeRef}
          type="text"
          id="heroUniverse"
          placeholder="Universum"
        />
      </div>
      <div>
        <input
          ref={superpowerRef}
          type="text"
          id="heroSuperpower"
          placeholder="Superpower"
        />
      </div>
      <div>
        <input ref={raceRef} type="text" id="heroRace" placeholder="Rasse" />
      </div>
      <div>
        <input ref={imgRef} type="text" id="heroImg" placeholder="Bild" />
      </div>
      <div>
        <select onChange={changeType} ref={typeRef} defaultValue="hero">
          <option value="hero">Hero</option>
          <option value="villain">Villain</option>
        </select>
      </div>
      <div>
        <button className={theme ? "" : "red"} ref={buttonRef} onClick={save}>
          Anlegen
        </button>
      </div>
    </section>
  );
}
