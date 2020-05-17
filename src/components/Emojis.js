import React, { useContext } from 'react';
import EmojiItem from './EmojiItem';
import MainContext from '../context/mainContext';
import './Emojis.css';

const Emojis = () => {
  const emojiContext = useContext(MainContext);

  const { emojiList } = emojiContext;

  return (
    <ul className='emoji-list'>
      {emojiList.map((item) => (
        <EmojiItem key={item.id} emoji={item.emoji} />
      ))}
    </ul>
  );
};

export default Emojis;
