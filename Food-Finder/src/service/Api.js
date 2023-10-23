const query = {
  app_id: process.env.APP_ID,
  app_key: process.env.APP_KEY,
};

// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=9e271ac3&app_key=6a6342218a242985b9f50e0f9ad22dad

export const fetchData = async (searchQuery) => {
  const { app_id, app_key } = query;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error, "Error on fetching data");
    return error;
  }
};
export const fetchDataFromTab = async (QueryId) => {
  const { app_id, app_key } = query;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error, "Error on fetching data");
    return error;
  }
};
