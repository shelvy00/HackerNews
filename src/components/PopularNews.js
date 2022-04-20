import React from 'react'

export const PopularNews = (props) => {

    console.log(props);
  const renderlist = props.popnews.map((popnew) => {
    console.log(popnew)
    return ( 
      <div className="card" key={popnew.title} style={{ width:'18rem' }} >
      <img src={popnew.urlToImage} className="card-img-top" alt={popnew.source.name} />
      <div className="card-body">
        <h2 className="author">{popnew.author}</h2>
        <h5 className="card-title">{popnew.title}</h5>
        <p className="card-text">{popnew.content}</p>
        <p className="description">{popnew.description}</p>
        <p className="publish">{popnew.publishedAt}</p>
        <a href={popnew.url} className="btn btn-primary">Read More</a>
      </div>
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
