import { StyledForm, StyledLabel } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <StyledForm autoComplete="off">
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
