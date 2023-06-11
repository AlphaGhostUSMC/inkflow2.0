import { format } from "date-fns"
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <div className="post">
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4008/' + cover} alt="Article Cover" />
        </Link>
      </div>
      <div className='texts'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a className='author'>{author.username}</a>
          <time>{format(new Date(createdAt), 'MMM dd, yyyy | HH:MM:SS')}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}