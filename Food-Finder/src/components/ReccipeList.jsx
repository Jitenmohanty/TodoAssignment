import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../service/Api";
import RecipeListItem from "./RecipeListItem";

function RecipeLists(props) {
  const [searchedTearm, setSearchedTearm] = useState("");
  const [query, setQuery] = useState("biriyani");
  const [data, setData] = useState("");
  const [resipeList, setRecipeList] = useState(false);

  const searchrecipe = (searchQuery) => {
    fetchData(searchQuery).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  };

  const handleRecipieListPage = () => {
    setRecipeList(true);

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight + 3000,
        behavior: "smooth",
      });
      console.log("Recipe List Page");
      clearTimeout();
    }, 1000);
    console.log(document.body.scrollHeight);
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  }, []);
  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearchedTearm(e.target.value)}
            value={searchedTearm}
            type="text"
            placeholder="Search you recipe"
          />
          <button
            onClick={() => (searchrecipe(searchedTearm), props.setLoader(true))}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p onClick={handleRecipieListPage}>{item.recipe.label}</p>
            </div>
          ))}
      </div>
      {resipeList && <RecipeListItem />}
    </div>
  );
}

export default RecipeLists;
