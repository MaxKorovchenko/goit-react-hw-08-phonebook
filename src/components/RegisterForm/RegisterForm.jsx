import { StyledForm, StyledLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <StyledForm autoComplete="off">
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
