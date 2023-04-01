import React, { useEffect } from "react";
import Layout from "@/src/components/Layout";
import { fetchPosts } from "@/src/redux/Slices/AsyncPostSlice";
import { useDispatch, useSelector } from "react-redux";
import AllPosts from "@/src/components/asyncPost/AllPosts";

const AsyncPost = () => {
  const { post, status, error } = useSelector((state) => state.asyncPost);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") dispatch(fetchPosts());
  }, [status]);

  return (
    <Layout>
      {status === "loading" ? (
        <p className="text-center">Loading...</p>
      ) : status === "succeeded" ? (
        <AllPosts allPost={post} />
      ) : status === "failed" ? (
        <p>{error}</p>
      ) : null}
    </Layout>
  );
};

export default AsyncPost;
