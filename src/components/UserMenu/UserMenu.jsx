import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { Mail, Wrapper } from './UserMenu.styled';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Mail>{user.email}</Mail>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </Wrapper>
  );
};
