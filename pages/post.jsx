import React, { useState } from "react";
import Layout from "@/src/components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { remove, incrementReactionCount } from "@/src/redux/Slices/postSlice";
import { MdDelete } from "react-icons/md";
import PostForm from "@/src/components/post/PostForm";
import PostReaction from "@/src/components/post/PostReaction";
import AuthorAndTime from "@/src/components/AuthorAndTime";

const Post = () => {
  const allPosts = useSelector((state) => state.post);
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="flex justify-evenly gap-10 mx-5">
        <div>
          <PostForm allUsers={allUsers} />
        </div>
        <div className="flex flex-col gap-3">
          {allPosts.map((post) => (
            <div
              className="border border-gray-400 p-3 rounded-md"
              key={post.id}
            >
              <div className="flex justify-between items-center gap-3">
                <h2 className="text-xl font-medium">{post.title}</h2>
                <MdDelete
                  className="cursor-pointer"
                  onClick={() => dispatch(remove(post.id))}
                />
              </div>

              <p className="mt-1">{post.description}</p>
              <AuthorAndTime allUsers={allUsers} userId={post.userId} time={post.time} />
              <PostReaction
                postId={post.id}
                postReaction={post.reactions}
                incrementReactionCount={incrementReactionCount}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
