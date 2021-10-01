import React from "react";
import Card from "./components/card";


const Cardlist = ({newsData}) => {
  console.log('Data: ', newsData)

  const newsArray = newsData.map((articles, idx) => {
    return (
      < Card
        key={idx}
        image={newsData[idx].urlToImage}
        author={newsData[idx].author}
        content={newsData[idx].content}
        url={newsData[idx].url}
  />
   )
  })
  return (<div>{newsArray}</div>)
}

export default Cardlist
