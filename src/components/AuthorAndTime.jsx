import React from "react";
import moment from "moment/moment";

const AuthorAndTime = ({allUsers=[], userId=null, time}) => {
  const onGetUserName = (userId) => {
    const isUser = allUsers.find((user) => user.id == userId);
    return isUser ? isUser?.name : "unknown author";
  };

  console.log("AuthorAndTime")

  return (
    <div className="mt-2 flex items-center gap-5">
      <p className="text-sm">by {onGetUserName(userId)}</p>
      <p className="text-sm">{time ? moment(time).fromNow() : ""}</p>
    </div>
  );
};

export default React.memo(AuthorAndTime);
