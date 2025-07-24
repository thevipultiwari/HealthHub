import React from 'react';
import { styled } from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const RetryButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary}dd;
    transform: translateY(-2px);
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('HealthHub Error Boundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>⚡ Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Our team has been notified 
            and is working to fix the issue. Please try refreshing the page.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
