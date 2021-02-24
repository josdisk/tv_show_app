import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search';
import Pagination from './components/ui/Pagination'

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query]);

  /**Pagination**/
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfirstPost, indexOfLastPost);

  // Change page
  const paginate = (PageNumber) => setCurrentPage(PageNumber)




  return (
    <div className="container">
      <Header />
      <Search getQuery={ (q) => setQuery(q) } />
      <CharacterGrid isLoading={isLoading} items={currentPosts} />
      <Pagination postPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
      <Footer />
    </div>

  )
}

export default App;
