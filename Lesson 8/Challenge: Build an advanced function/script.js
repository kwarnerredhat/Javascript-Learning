const data = [
    {
      title: "Movie 1",
      content: "This is the content of Movie 1.",
    },
    {
      title: "Movie 2",
      content: "This is the content of Movie 2.",
    },
    {
      title: "Movie 3",
      content: "This is the content of Movie 3.",
    },
  ];
  
  const displayMovies = () => {
    const mainContainer = document.querySelector("#main-container");
  
    data.map((item) => {
     
      const movies = document.createElement("Movie");
  
      const titleElement = document.createElement("h2");
      titleElement.textContent = item.title;

      const contentElement = document.createElement("p");
      contentElement.textContent = item.content;
  
      movie.appendChild(titleElement);
      movie.appendChild(contentElement);
  

      mainContainer.appendChild(movie);
    });
  };
  
  
  displayMovies();
  