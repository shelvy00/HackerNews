import React from 'react'

export const PopularNews = (props) => {

    console.log(props);
  const renderlist = props.popnews.map((popnew) => {
    console.log(popnew)
    return ( <div className="ui container" key={popnew.title}>
      <div className="author">
        <img src={popnew.urlToImage} style={{ maxWidth:'200px' }} />
        <h2>{popnew.author}</h2>
       </div>
       <h4>{popnew.title}</h4>
       <br />
       <div className="pulished">
         {popnew.content}
       </div>
       <div>
        <p>{popnew.description}</p>
        <p>{popnew.publishedAt}</p>
        <a href={popnew.url}>Click Here for more</a>
       </div>
       <br />
     </div>
    );
   })
  
    return (
      <div>
        <h1>Top-Headlines</h1>
        {renderlist}
      </div>
    );  
}

export default PopularNews;
