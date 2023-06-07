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
  return (
    <form>
      <input type="title" placeholder={"Title"} value={title} onChange={ev => setTitle(ev.target.value)} />
      <input type="summary" placeholder={"Summary"} value={summary}onChange={ev => setSummary(ev.target.value)} />
      <input type="file" placeholder={"Image"} />
      <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
      <button style={{ marginTop: '5px' }}>Create post</button>
    </form>
  );
}