import React, { useState } from 'react';
import { ResetPasswordContainer, Button, ErrorText, ResetForm, ResetTitle } from './ResetPassword.styles';
import PasswordInput from '../shared/PasswordInput';

interface ResetPasswordProps {
  onResetPassword: (token: string, password: string, secret:string, password_confirm:string) => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onResetPassword }) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add validation logic here
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Perform password reset via API
    //onResetPassword(password, confirmPassword);
  };

  return (
    <ResetPasswordContainer>
      <ResetTitle>Create new Password?</ResetTitle>
      <ResetForm onSubmit={handleSubmit}>
        Password
        <PasswordInput
          password={password}
          onChange={setPassword}
        />
        Confirm Password
        <PasswordInput
          password={confirmPassword}
          onChange={setConfirmPassword}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button type="submit">Reset Password</Button>
      </ResetForm>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
