import React, { useState } from 'react';
import EmojiItem from './EmojiItem';
import './Emojis.css';

const Emojis = () => {
  const [emojiList, setEmojiList] = useState([
    {
      id: 1,
      emoji: '😀',
    },
    {
      id: 2,
      emoji: '😁',
    },
    {
      id: 3,
      emoji: '😂',
    },
    {
      id: 4,
      emoji: '😄',
    },
    {
      id: 5,
      emoji: '😍',
    },
    {
      id: 6,
      emoji: '🙄',
    },
    {
      id: 7,
      emoji: '😊',
    },
    {
      id: 8,
      emoji: '😫',
    },
    {
      id: 9,
      emoji: '😭',
    },
    {
      id: 10,
      emoji: '🤢',
    },
    {
      id: 11,
      emoji: '🌹',
    },
    {
      id: 12,
      emoji: '❤',
    },
  ]);
  return (
    <ul className='emoji-list'>
      {emojiList.map((item) => (
        <EmojiItem key={item.id} emoji={item.emoji} />
      ))}
    </ul>
  );
};

export default Emojis;
