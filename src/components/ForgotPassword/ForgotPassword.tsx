import React, { useState } from 'react';
import { ForgotPasswordContainer, Input, Button, ErrorText, ForgotTitle, ForgotForm, CancelButton } from './ForgotPassword.styles';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const goBack = () => {
    history.back();
  }

  const validate = () => {
    setError(null);
    if (!email) {
      setError('Please fill in email');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      setError('Please enter a valid email address');
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validate();
    //const response =  await forgotPassword(email);
  };

  return (
    <ForgotPasswordContainer>
      <ForgotTitle>Forgot Password?</ForgotTitle>
      <ForgotForm onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        {error && <ErrorText>{error}</ErrorText>}
        {/* {message && <div>{message}</div>} */}
        <Button type="submit">Send</Button>
      </ForgotForm>
      <CancelButton cancel onClick={goBack}>Cancel</CancelButton>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
