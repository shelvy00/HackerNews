# HackerNews App

News app using [the News API](https://https://thehackernews.com) that allows the user to search for any current event, along with a "Popular News" section on the right side.

### Project Description

On page load, the application will display articles from the search term "backetball". To search for anything else, enter a term in the searchbar you are interested in, and a list of articles will render on screen. To go to article, click on title, and the article will open up in a new tab.

### Technologies Used

React JS, News API, Semantic-UI

### Quick Start

- Download zip file or clone the repository on your loacl machine and open it up in your code editor.

- In the terminal, run ```npm install``` to install all libraries.

- Create a ```.env``` file in the root directory to store your News API Key as shown below: (variable name must have prefix of REACT_APP_)

```REACT_APP_KEY = XXXXXXXXXXXXXXXXX```

- To get the News API Key, go to [News API](https://https://thehackernews.com), click on Get API Key and enter the information to register. Once you get your key, assign it to your ```REACT_APP_KEY in your```in your ```.env file```.

- To reference the key anywhere in the project: ```process.env.REACT_APP_KEY```.



### How to run the app in the browser

- In the terminal run npm start. This will run the app in development mode on port [http://localhost:3000](http://localhost:3000).

- The page will reload when you make changes. You may also see errors in the console.

