import {format} from "date-fns"

export default function Post({ title, summary, cover, content, createdAt, author}) {
  return (
    <div className="post">
      <div className='image'>
        <img src="https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-1125716134.jpg?w=1390&crop=1" alt="image1" />
      </div>
      <div className='texts'>
        <h2>{title}</h2>
        <p className='info'>
          <a className='author'>Mary Ann Azevedo, Christine Hall</a>
          <time>{format(new Date(createdAt), 'MMM dd, yyyy | HH:MM:SS')}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  );
}