import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import "./Post.css";
export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="user__details">
          <img className="post__user-img" src={post.img} alt="" />
          <p>
            {post.title}
            <small>{post.subTitle}</small>
          </p>
        </div>
        <div className="post__links">
          <a href={post.github}>
            <FaGithub />
          </a>
          <a href={post.live}>
            <IoIosLink className="fill__primary" />
          </a>
        </div>
      </div>

      <div className="post__video">
        <a href={post?.live}>
          <img src={post.imageUrl} alt={post.img} className="post__video" />
        </a>
      </div>

      <p className="post__details">{post.description}</p>
      <small>
        {" "}
        <i>
          Note: Backend hosted on free vercel server. Please give it 15s - 20s
          to load.
        </i>
      </small>
      <ul className="post__tech">
        {post?.tech.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
