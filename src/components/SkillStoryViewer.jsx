import { AnimatePresence, motion } from "framer-motion";

export default function SkillStoryViewer({ skill, onClose }) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center px-6">
            <img
              src={skill.image} alt="story"
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold">{skill.title}</h2>
            <p className="text-gray-400 mt-2">{skill.category}</p>
            <p className="mt-4 text-gray-300">{skill.description}</p>

            <button
              onClick={onClose}
              className="mt-8 px-6 py-2 bg-white text-black rounded-full"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
