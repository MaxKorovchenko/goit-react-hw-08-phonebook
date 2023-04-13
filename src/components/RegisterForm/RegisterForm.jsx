import { useDispatch } from 'react-redux';
import { StyledForm, StyledLabel } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="on">
      <StyledLabel>
        Username
        <input type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <input type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <input type="password" name="password" />
      </StyledLabel>
      <button type="submit">Register</button>
    </StyledForm>
  );
};
