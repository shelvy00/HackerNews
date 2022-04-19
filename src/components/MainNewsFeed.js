import React from 'react'

  const MainNewsFeed = (props) => {

   const articles = props.articles.map((article) => {
     console.log(article)
     return (<div className="ui container" key={article.title}>
       <div className="author">
         <img src={article.urlToImage} style={{ maxWidth:'200px' }} />
         <h2>{article.author}</h2>
        </div>
        <h4>{article.title}</h4>
        <br />
        <div className="pulished">
          {article.content}
        </div>
        <div>
         <p>{article.description}</p>
         <p>{article.publishedAt}</p>
         <a href={article.url}>Click Here for more</a>
        </div>
        <br />
     </div>
     );
    })

   return (
     <div>{articles}</div>
   )
}

export default MainNewsFeed;
