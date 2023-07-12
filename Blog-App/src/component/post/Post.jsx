import { Link } from "react-router-dom"
import "./post.css"

export default function Post({img,time,cat1,cat2,title,des}) {
  return (
    <div className="post">
        <Link to="/single" className="link">
        <img
        className="postImg"
        src={img} alt="" />
        </Link>
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">{cat1}
            </span>
            <span className="postCat">{cat2}
            </span>
        </div>
        <span className="postTitle">{title}</span>
        <hr />
        <span className="postDate">{time}</span>
    </div>
    <p className="postDesc">{des}</p>
    </div>
  )
}
