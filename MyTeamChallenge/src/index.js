import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './Header'
//import CardItem from './CardItem'
import Footer from './Footer'
import Cards from './Cards';
import data from '../Data.json'

const App = () => {
    return (
        <>
    <section>
       <Header/>
    </section>


    <section>
        <div className="middle">
          <Cards members = {data.members} />
        </div>
    </section>

      <section>
        <Footer/>
      </section> 

        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


 