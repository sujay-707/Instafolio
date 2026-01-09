import { motion } from "framer-motion";
import InstaActions from "./InstaActions";

export default function HomeCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black border border-white/10 rounded-2xl overflow-hidden"
    >
      {/* Image */}
      <img
        src={item.image}
        alt=""
        className="w-full h-80 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Action Bar */}
        <InstaActions />

        {/* Caption */}
        <p className="mt-3 text-sm leading-relaxed">
          <span className="font-semibold mr-1">{item.tag}</span>
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}
