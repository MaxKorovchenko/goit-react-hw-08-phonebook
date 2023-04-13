import { useDispatch } from 'react-redux';
import { StyledForm, StyledLabel } from './LoginForm.styled';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(login({ email, password }));
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <StyledLabel>
        Email
        <input type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <input type="password" name="password" />
      </StyledLabel>
      <button type="submit">Log In</button>
    </StyledForm>
  );
};
