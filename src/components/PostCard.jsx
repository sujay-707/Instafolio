import { motion } from "framer-motion";

export default function PostCard({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-dark rounded-xl overflow-hidden"
    >
      <img src={post.image} alt="" className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-400">{post.caption}</p>
      </div>
    </motion.div>
  );
}
