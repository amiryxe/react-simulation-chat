import React, { useContext } from "react";
import { Button } from "antd";
import MainContext from "../context/mainContext";

const EmojiItem = ({ emoji }) => {
  const { selectedEmoji, setSelectedEmoji } = useContext(MainContext);

  const selectEmojiClickHandler = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <li>
      <Button
        type="link"
        size="large"
        style={{ padding: "5px" }}
        onClick={() => selectEmojiClickHandler(emoji)}
        content={emoji}
      >
        {emoji}
      </Button>
    </li>
  );
};

export default EmojiItem;
