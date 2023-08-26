import React from "react";

function Home(props) {
  const { title, content } = props;

  return (
    <div className="my-component">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Home;
