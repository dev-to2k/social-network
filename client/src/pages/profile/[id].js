import Info from 'components/profile/Info';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfileUsers } from 'redux/actions/profileAction';

export default function Profile() {
  const { profile, auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (profile.ids.every((item) => item !== id)) {
      dispatch(getProfileUsers({ users: profile.users, id, auth }));
    }
  }, [id, profile.users, auth, dispatch]);

  return (
    <div className="profile">
      {profile.loading ? (
        <div className="loader d-block mx-auto my-5" />
      ) : (
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />
      )}
    </div>
  );
}
