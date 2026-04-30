import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-headline-xl text-headline-xl mb-4">
          My <span className="text-secondary">Projects</span>
        </h1>
        <p className="text-on-surface-variant max-w-lg mx-auto">
          I am currently curating my best work. Check back soon for a deep dive into my architectural solutions and fullstack applications.
        </p>
      </motion.div>
    </div>
  );
}
