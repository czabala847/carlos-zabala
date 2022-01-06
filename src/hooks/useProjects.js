import React from "react";
// import data from "./data.json";

const getData = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch("data.json", options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const useProjects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    (async function fetchData() {
      const data = await getData();

      setProjects(data);
    })();
  }, []);

  return projects;
};

export { useProjects };
