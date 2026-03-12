import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";
import "./Post.css";

export const Post = ({ post }) => {
  return (
    <motion.div 
      className="post glass-panel"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="post__video">
        <a href={post?.live} target="_blank" rel="noopener noreferrer">
          <div className="post__image-container">
            <img
              src={post.imageUrl}
              alt={post.title || "Project thumbnail"}
              className="post__img"
              loading="lazy"
            />
            <div className="post__overlay">
              <span className="view__btn">View Project</span>
            </div>
          </div>
        </a>
      </div>

      <div className="post__content">
        <div className="post__header">
          <div className="post__details__text">
            <h3>{post.title}</h3>
            <small className="text-gradient">{post.subTitle}</small>
          </div>
          <div className="post__links">
            <a href={post.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repo">
              <FaGithub />
            </a>
            <a href={post.live} target="_blank" rel="noopener noreferrer" aria-label="Live Site">
              <IoIosLink />
            </a>
          </div>
        </div>

        <p className="post__desc">{post.description}</p>
        
        <ul className="post__tech">
          {post?.tech.map((item, index) => (
            <li key={index} className="tech__badge">{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
