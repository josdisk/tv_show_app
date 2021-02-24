import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? <Spinner /> : 
    <div id="page_content">
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>
    </div>

}

export default CharacterGrid 