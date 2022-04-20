import React from 'react'

  const MainNewsFeed = (props) => {

   const articles = props.articles.map((article) => {
     //console.log(article)
     return ( 
          <div className="card" key={article.title} style={{ width:'30rem' }}  >
           <img src={article.urlToImage} className="card-img-top" alt={article.source.name} />
          <div className="card-body">
           <h2 className="author">{article.author}</h2>
           <h5 className="card-title">{article.title}</h5>
           <p className="card-text">{article.content}</p>
           <p className="description">{article.description}</p>
           <p className="publish">{article.publishedAt}</p>
           <a href={article.url} className="btn btn-primary">Read More</a>
          </div>
         </div>
     );
    })

   return (
     <div>
        <h1>MainNewsFeed</h1> 
        {articles}
     </div>
   )
}

export default MainNewsFeed;
