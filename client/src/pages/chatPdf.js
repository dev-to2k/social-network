import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getDataApi, postDataApi } from 'utils/fetchData';
import UploadedFiles from './chatPdf/uploaded_files';

function chatPdf() {
  const { auth } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [label, setLabel] = useState('Choose a file');
  const [files, setFiles] = useState([]);
  const [summarize, setSummarize] = useState('');
  const getFiles = async () => {
    try {
      const res = await getDataApi('upload/files', auth.token);
      if (res.data.files) setFiles(res.data.files);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFiles();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('uploaded_id', auth.user._id);
    try {
      const res = await postDataApi('chatPdf/upload', formData, auth.token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chatPdf">
      <div className="files">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="file">{label}</label>
            <input
              type="file"
              id="file"
              name="file"
              accept="application/pdf"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setLabel(e.target.files[0].name);
              }}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
        <UploadedFiles files={files} setSummarize={setSummarize} setLoading={setLoading} />
      </div>
      <div className="sumarize">
        {loading ? (
          <div>Summarizing Document...</div>
        ) : (
          <>
            {summarize && (
              <ul>
                {summarize.split('\n').map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default chatPdf;
