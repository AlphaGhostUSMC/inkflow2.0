import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns"

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4008/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return <div>No Posts Found</div>;
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{format(new Date(postInfo.createdAt), 'MMM dd, yyyy | HH:MM:SS')}</time>
      <div className="author">by @{ postInfo.author.username}</div>
      <div className="image">
        <img src={`http://localhost:4008/${postInfo.cover}`} alt="cover" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
}