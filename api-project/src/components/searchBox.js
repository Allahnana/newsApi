import React from "react";

const searchBox = ({ searchNews }) => {
  return (
    <div>
      <input onChange={searchNews} />
    </div>
  );
};

export default searchBox;
