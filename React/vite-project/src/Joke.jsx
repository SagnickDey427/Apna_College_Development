import { useState, useEffect } from "react";

export default function Joke() {
  let [joke, setJoke] = useState({});
  let getJoke = async () => {
    let URL = "https://v2.jokeapi.dev/joke/Programming";
    let res = await fetch(URL);
    let jsonRes = await res.json();
    setJoke({ setup: jsonRes.setup, delivery: jsonRes.delivery });
  };

  useEffect(() => {
    let initialJoke = async () => {
      let URL = "https://v2.jokeapi.dev/joke/Programming";
      let res = await fetch(URL);
      let jsonRes = await res.json();
      if (jsonRes.type === "twopart") {
        setJoke({ setup: jsonRes.setup, delivery: jsonRes.delivery });
      } else {
        setJoke({ setup: jsonRes.joke, delivery: "" });
      }
    };
    initialJoke();
  }, []);
  return (
    <div>
      <button onClick={getJoke}>Get Joke</button>
      <div>Setup : {joke.setup}</div>
      <div>Delivery : {joke.delivery}</div>
    </div>
  );
}
