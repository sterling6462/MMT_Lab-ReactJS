import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Headline from './components/Headline';
import ItemList from './components/ItemList';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from './components/Footer';
 
class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
 
        <main>
          <section id="content">
            <Headline bigTitle={blog.bigTitle} />
            <ItemList itemList={blog.itemList} />
          </section>
 
          <Aside />
 
          <BoxList boxList={blog.boxList} />
        </main>
 
        <Footer />
      </div>
    );
  };
};
 
const blog = {
  bigTitle: 'Consectetur elit proin sit amet neque.',
  itemList: [
    {
      title: 'Proin ex nunc',
      info: 'Proin ex nunc, bibendum ut magna quis.'
    },
    {
      title: 'Blandit mollis',
      info: 'Blandit mollis orci. Ut pretium diam ut tristique interdum amet condimentum.'
    },
    {
      title: 'Donec ut libero',
      info: 'Donec ut libero pretium, efficitur nisl vel, sagittis elit.'
    }
  ],
  boxList: [
    'Placerat arcu vel',
    'Duis at est nunc',
    'Tellus at trist',
    'Ut rhoncus'
  ]
};
 
export default App;
