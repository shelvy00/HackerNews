import React from 'react';
import SearchBar from './SearchBar';
import hackernews from '../apis/hackernews';
import MainNewsFeed from './MainNewsFeed';
import PopularNews from './PopularNews';

export class App extends React.Component {
    state = { articles: [], popnews: [] }

    componentDidMount() {
        this.onSearchSubmit("Tesla")
        this.TopNews();
    }

   TopNews = async () => {
        const response = await hackernews.get("/top-headlines", {
            params: { country: "us", pageSize: "5", category: "technology" },
        });
        console.log(response);
        this.setState({ popnews: response.data.artcles })
    }
    

    onSearchSubmit = async (term) => {
        const response = await hackernews.get("/everything", {
            params: { q: term },
        });
        this.setState({ articles: response.data.articles });
    } 

  render() {
  return (
    <div className="ui container" style={{ marginTop: '10PX' }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <div className="ui grid">
       <div className="row">
        <div className="nine wide column">  
         <MainNewsFeed articles={this.state.articles} />
        </div>
        <div className="seven wide column">
         <PopularNews popnews={this.state.popnews} /> 
        </div> 
       </div>
      </div>
    </div>
   )
  } 
}

export default App;
