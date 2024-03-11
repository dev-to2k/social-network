import FollowButton from 'components/follow/FollowButton';
import UserCard from 'components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSuggestions } from 'redux/actions/suggestionsAction';

function RightSideBar() {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="rounded-10 shadow-sm p-3 border right-side-bar bg-white">
      <div className="user-top">
        <UserCard user={auth.user} />
      </div>

      <div className="d-flex justify-content-between align-items-center my-2">
        <h5 className="text-danger mb-0">Gợi ý theo dõi</h5>
        {!suggestions.loading && (
          <button type="button" onClick={() => dispatch(getSuggestions(auth.token))}>
            <i className="fas fa-redo" />
          </button>
        )}
      </div>

      {suggestions.loading ? (
        <div className="loader d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowButton user={user} />
            </UserCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default RightSideBar;
