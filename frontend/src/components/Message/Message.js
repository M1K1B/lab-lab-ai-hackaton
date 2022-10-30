import React from "react";

import "./styles.css";

const Message = ({ sender, message }) => {
  return (
    <div className={sender == "person" ? "poruka p-person" : "poruka p-bot"}>
      <img
        className={sender == "person" ? "d-none" : "avatar"}
        src={
          sender == "bot" ? "Group 30.png" : "undraw_male_avatar_re_hguk 1.png"
        }
      />
      <div
        className={sender == "person" ? "content c-person" : "content c-bot"}
      >
        {message}
      </div>
      <img
        className={sender == "person" ? "avatar" : "d-none"}
        src={
          sender == "bot" ? "Group 30.png" : "undraw_male_avatar_re_hguk 1.png"
        }
      />
    </div>
  );
};

export default Message;
