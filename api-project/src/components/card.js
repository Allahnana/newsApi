import React from "react";

const Card = ({ author, content, image, publishedAt, url }) => {
  return (
    <div>
      <img src={image} alt={image} />
      <h1>{author}</h1>
      <p>{content}</p>
      <p>{publishedAt}</p>
      <a href={url}>Read more</a>
    </div>
  );
};

export default Card;
