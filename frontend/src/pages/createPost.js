import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};
const formats = [
  'header', 'font',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0])
    ev.preventDefault();
    const response = await fetch('http://localhost:4008/post', {
      method: 'POST',
      body: data,
    });
    console.log(await response.json());
  }
  return (
    <form onSubmit={createNewPost}>
      <input type="title" placeholder={"Title"} value={title} onChange={ev => setTitle(ev.target.value)} />
      <input type="summary" placeholder={"Summary"} value={summary} onChange={ev => setSummary(ev.target.value)} />
      <input type="file" placeholder={"Image"} onChange={ev => setFiles(ev.target.files)} />
      <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
  );
}