import React, { useEffect, useState } from "react";
import JokeCreator from "./JokeCreator";
import downArrow from "../../../assets/assets_Homework_Front-End_01/path-copy-7.png";

function Jokes({ jokes, header, viewJoke }) {
  const [renderedJokes, setRenderedJokes] = useState([]);

  useEffect(() => {
    if (jokes.length === 0) {
      return;
    } else {
      if (jokes.length < 6) {
        setRenderedJokes([...jokes]);
      } else {
        const tempJokes = [];
        for (let i = 0; i < 6; i++) {
          tempJokes.push(jokes[i]);
        }
        setRenderedJokes([...tempJokes]);
      }
    }
  }, [jokes]);

  // functions start here

  function addMoreJokes(e) {
    // this function adds 3 more jokes
    e.preventDefault();
    const addTheseJokes = [];

    // get jokes that have not been rendered
    const more = jokes.filter(
      (joke) => !renderedJokes.find((elem) => elem.value === joke.value)
    );

    // get first 3 jakes and add them to get rendered
    for (let i = 0; i < 3; i++) {
      const temp = [more[i].categories[0]];
      addTheseJokes.push({
        categories: temp,
        value: more[i].value,
      });
    }

    // add these 3 jokes to the current rendered jokes
    try {
      setRenderedJokes((prevJokes) => [...prevJokes, ...addTheseJokes]);
    } catch (err) {
      console.log(err);
    }
  }

  function handleReturnedContent(returnedContent) {
    viewJoke(returnedContent);
  }

  return (
    <>
      <div className="jokes-container">
        <div
          className="jokes-header"
          style={{ backgroundColor: header.bgcolor }}
        >
          {header.text}
        </div>
        <div className="joke-card-items">
          {renderedJokes.map((joke, index) => (
            <JokeCreator
              key={`joke-${index}`}
              content={{ header: joke.categories[0], body: joke.value }}
              viewContent={handleReturnedContent}
            />
          ))}
        </div>
        {renderedJokes.length < jokes.length && (
          <div className="joke-view-more" onClick={addMoreJokes}>
            VIEW MORE
            <img src={downArrow} alt="down arrow" />
          </div>
        )}
      </div>
    </>
  );
}

export default Jokes;
