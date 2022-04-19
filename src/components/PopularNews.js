import React from 'react'

export const PopularNews = (props) => {
    
  const renderlist = props.popnews.map((popnew) => {
    console.log(popnew)
    return ( <div className="ui container" key="index">
      <div className="author">
        <h2>{popnew.author}</h2>
       </div>
       <h4>{popnew.title}</h4>
       <br />
       <div className="pulished">
         {popnew.content}
       </div>
       <div>
        <p>{popnew.description}</p>
        <a href={popnew.url}>Click Here for more</a>
       </div>
       <br />
    </div>
    );
   })
  
    return (
      <div>
        {renderlist}
      </div>
    );  
}

export default PopularNews;
