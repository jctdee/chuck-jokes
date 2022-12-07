import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./Category/Categories";
import Jokes from "./Jokes/Jokes";
import Item from "./Item/Item";

function Body() {
  const [isByCategory, setIsByCategory] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredJokes, setFilteredJokes] = useState([]);
  const [header, setHeader] = useState({
    text: "random",
    bgcolor: "#86efac",
  });
  const [isViewing, setIsViewing] = useState(false);
  const [viewingItem, setViewingItem] = useState({});

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/search?query=all")
      .then((res) => {
        setJokes(
          res.data.result.filter((joke) => joke.categories.length !== 0)
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCategory(category) {
    if (category.text === "view all") {
      setHeader({
        text: "random",
        bgcolor: "#86efac",
      });
      setFilteredJokes(jokes);
    } else {
      setHeader(category);
      setFilteredJokes(
        jokes.filter((joke) => joke.categories[0] === category.text)
      );
    }
    setIsByCategory(true);
  }

  function handleViewing(returnedContent) {
    setViewingItem(returnedContent);
    setIsViewing(true);
  }

  if (isLoading) return null;

  return (
    <main>
      {isViewing ? (
        <Item content={viewingItem} goBack={() => setIsViewing(false)} />
      ) : (
        <>
          <Categories category={handleCategory} />
          <Jokes
            jokes={isByCategory ? filteredJokes : jokes}
            header={header}
            viewJoke={handleViewing}
          />
        </>
      )}
    </main>
  );
}

export default Body;
