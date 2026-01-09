import { motion, AnimatePresence } from "framer-motion";

export default function StoryViewer({ story, onClose }) {
  return (
    <AnimatePresence>
      {story && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <img
            src={story.image} alt="story"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="relative z-10 text-center px-6">
            <h2 className="text-3xl font-bold">{story.title}</h2>
            <p className="mt-2 text-gray-300">{story.description}</p>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-white text-black rounded-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
