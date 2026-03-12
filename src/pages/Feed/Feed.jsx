import { motion } from "framer-motion";
import { Post } from "../../components/Post/Post";
import { feedData } from "../../data/feedData";
import "./Feed.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

export const Feed = () => {
  return (
    <div className="feed container">
      <motion.div 
        className="feed__header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient">Featured Projects 🚀</h2>
        <p>A selection of some of my recent work.</p>
      </motion.div>
      <motion.div 
        className="feed__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {feedData?.map((post) => (
          <motion.div key={post.id} className="feed__item" variants={itemVariants}>
            <Post post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
