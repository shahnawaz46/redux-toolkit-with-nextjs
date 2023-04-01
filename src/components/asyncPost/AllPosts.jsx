import React from "react";
import { MdDelete } from "react-icons/md";
import PostReaction from "../post/PostReaction";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  incrementReactionCount,
} from "@/src/redux/Slices/AsyncPostSlice";
import AuthorAndTime from "../AuthorAndTime";

const AllPosts = ({ allPost }) => {
  const allUsers = useSelector(state=>state.asyncUser)
  const dispatch = useDispatch();
  // console.log("AllPosts")
  return (
    <div className="flex justify-center flex-wrap gap-3">
      {allPost.map((post) => (
        <div
          className="border border-gray-400 p-3 rounded-md w-96"
          key={post.id}
        >
          <div className="flex justify-between items-start gap-3">
            <h2 className="text-xl font-medium w-11/12">{post.title}</h2>
            <MdDelete
              className="cursor-pointer text-lg"
              onClick={() => dispatch(remove(post.id))}
            />
          </div>

          <p className="mt-1">{post.body}</p>
          <AuthorAndTime allUsers={allUsers} userId={post.userId} time={post.date} />
          <PostReaction
            postId={post.id}
            postReaction={post.reactions}
            incrementReactionCount={incrementReactionCount}
          />
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
