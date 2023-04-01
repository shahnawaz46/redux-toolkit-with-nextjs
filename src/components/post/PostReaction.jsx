import React from "react";
import { useDispatch } from "react-redux";

const PostReaction = ({ postId, postReaction,incrementReactionCount }) => {
  const dispatch = useDispatch();
  console.log("PostReaction")
  return (
    <div className="flex gap-5 mt-1">
      <button
        onClick={() =>
          dispatch(incrementReactionCount({ postId, reaction: "thumbsup" }))
        }
      >
        👍 {postReaction["thumbsup"]}
      </button>
      <button
        onClick={() =>
          dispatch(incrementReactionCount({ postId, reaction: "wow" }))
        }
      >
        😮 {postReaction["wow"]}
      </button>
      <button
        onClick={() =>
          dispatch(incrementReactionCount({ postId, reaction: "heart" }))
        }
      >
        🧡 {postReaction["heart"]}
      </button>
    </div>
  );
};

export default React.memo(PostReaction);
