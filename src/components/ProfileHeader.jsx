import profile from "../data/profile";
import { motion } from "framer-motion";

export default function ProfileHeader() {
  return (
    <div className="text-center">
      {/* Profile Image Wrapper */}
      <motion.div
        className="
          mx-auto
          w-40 h-40
          rounded-full
          border-4 border-white
          overflow-hidden
          flex items-center justify-center
        "
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
      >
        <img
          src="/pic.jpg"
          alt="Profile"
          className="w-full h-full object-fit"
        />
      </motion.div>

      {/* Name & Role */}
      <h1 className="mt-4 text-2xl font-semibold text-white">
        {profile.name}
      </h1>
      <p className="text-gray-400 text-sm">
        {profile.role}
      </p>

      {/* Contact */}
      <div className="mt-3 text-sm text-gray-400 space-y-1">
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 mt-4 text-sm text-gray-300">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
