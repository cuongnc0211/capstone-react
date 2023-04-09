import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <main>
        <div className="App">
          <section className="banner">
            <img className="banner-bg" src="https://raw.githubusercontent.com/cuongnc0211/images-saver/master/images/pexels-edward-eyer-1049626.jpg" alt />
            <div className="banner-text">
              <h2>Autumn Collection</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh neque, malesuada at libero et, dictum tincidunt eros. Sed elementum, diam ut feugiat fringilla, risus purus gravida quam, sit amet lobortis nisi augue in enim. Vivamus congue cursus odio, non hendrerit turpis tristique ut</p>
            </div>
          </section>

          <section className="article-container">
            <article>
              <div className="article-image-container">
                <img className="article-image" src="https://raw.githubusercontent.com/cuongnc0211/images-saver/master/images/article_1.jpg" />
              </div>
              <div className="article-body">
                <h3>Open time</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p><br />
                <ul>
                  <li>Mon-Fri: 2PM - 09PM</li>
                  <li>Sat: 11AM - 11PM</li>
                  <li>Sun: 11AM - 09PM</li>
                </ul>
              </div>
            </article>
            <article>
              <div className="article-image-container">
                <img className="article-image" src="https://raw.githubusercontent.com/cuongnc0211/images-saver/master/images/article_2.jpg" />
              </div>
              <div className="article-body">
                <h3>Reservation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh neque, malesuada at libero et, dictum tincidunt eros. Sed elementum, diam ut feugiat fringilla, risus purus gravida quam.
                </p><br />
                <p><a href="#">Book a table</a></p>
              </div></article>
            <article>
              <div className="article-image-container">
                <img className="article-image" src="https://raw.githubusercontent.com/cuongnc0211/images-saver/master/images/article_3.jpg" />
              </div>
              <div className="article-body">
                <h3>Our menu</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nibh neque, malesuada at libero et, dictum tincidunt eros. Sed elementum, diam ut feugiat fringilla, risus purus gravida quam.
                </p><br />
                <p><a href="#">See our menu</a></p>
              </div></article>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
