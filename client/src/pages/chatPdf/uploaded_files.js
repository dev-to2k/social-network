/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getDataApi } from 'utils/fetchData';

function UploadedFiles(props) {
  const { files, setSummarize, setLoading } = props;
  const { auth } = useSelector((state) => state);
  const handleClick = async (file) => {
    try {
      setLoading(true);
      const res = await getDataApi(`chatPdf/${auth.user._id}/${file.pdf}`, auth.token);
      setLoading(false);
      setSummarize(res.data.completion);
    } catch (error) {
      setSummarize(error.response.data.msg);
      setLoading(false);
    }
  };
  return (
    <ul>
      {files.map((file) => {
        return (
          <li key={file.pdf} className="p-2">
            <span
              className="text-dark"
              onClick={() => {
                handleClick(file);
              }}
            >
              {file.pdf}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default UploadedFiles;
