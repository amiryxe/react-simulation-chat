import React, { useContext } from "react";
import { Button } from "antd";
import MainContext from "../../context/mainContext";

const EmojiItem = ({ emoji, userType }) => {
  const { setSelectedEmoji } = useContext(MainContext);

  const selectEmojiClickHandler = (emoji) => {
    setSelectedEmoji({
      emoji,
      userType
    });
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
