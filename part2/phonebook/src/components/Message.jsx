import React from "react";

const Message = ({ message, messageClass }) => {
  if (message === null) {
    return;
  }

  return <div className={messageClass}>{message}</div>;
};

export default Message;
