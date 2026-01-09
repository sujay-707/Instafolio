import posts from "../data/posts";
import PostCard from "./PostCard";

export default function Feed() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
