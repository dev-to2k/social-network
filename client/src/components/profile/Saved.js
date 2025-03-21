/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import LoadMoreButton from 'components/LoadMoreButton';
import PostThumb from 'components/PostThumb';
import { useEffect, useState } from 'react';
import { GLOBALTYPES } from 'redux/actions/globalTypes';
import { getDataApi } from 'utils/fetchData';

function Saved({ auth, dispatch }) {
  const [savePosts, setSavePosts] = useState([]);
  const [result, setResult] = useState(9);
  const [page, setPage] = useState(2);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getDataApi('getSavePosts', auth.token)
      .then((res) => {
        setSavePosts(res.data.savePosts);
        setResult(res.data.result);
        setLoad(false);
      })
      .catch((err) => {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } });
      });

    return () => setSavePosts([]);
  }, [auth.token, dispatch]);

  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataApi(`getSavePosts?limit=${page * 9}`, auth.token);
    setSavePosts(res.data.savePosts);
    setResult(res.data.result);
    setPage(page + 1);
    setLoad(false);
  };

  return (
    <div>
      <p>
        <span className="fs-5 fw-600">Tất cả</span>
      </p>
      <PostThumb posts={savePosts} result={result} />

      {load && <div className="loader d-block mx-auto" />}

      <LoadMoreButton result={result} page={page} load={load} handleLoadMore={handleLoadMore} />
    </div>
  );
}

export default Saved;
