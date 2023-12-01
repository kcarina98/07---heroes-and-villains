import { useEffect, useState } from "react";
import HeroItem from "./HeroItem";
import AddHero from "./AddHero";
import { v4 } from "uuid";

export default function HeroList() {
  const [refresh, setRefresh] = useState(true);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9898/api/characters")
      .then((response) => response.json())
      .then((data) => setHeroes(data));
  }, [refresh]);

  return (
    <>
      <h1>Heroes and Villains</h1>
      <AddHero setRefresh={setRefresh} />
      <section className="herolist">
        {heroes.map((hero) => (
          <HeroItem hero={hero} key={v4()} setRefresh={setRefresh} />
        ))}
      </section>
    </>
  );
}
