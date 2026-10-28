import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Gagal mengambil data post:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Post Cards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercise;