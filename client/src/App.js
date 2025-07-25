import React, { Suspense, lazy } from "react";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy loading for performance optimization
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Workouts = lazy(() => import("./pages/Workouts"));
const ExerciseLibrary = lazy(() => import("./components/exercise/ExerciseLibrary"));
const Authentication = lazy(() => import("./pages/Authentication"));
// Professional styled container with modern design
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  transition: all 0.3s ease;
  
  /* Modern scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bg_secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 3px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: ${({ theme }) => theme.bg};
`;

// Professional loading component
const SuspenseLoader = () => (
  <LoadingContainer>
    <LoadingSpinner />
  </LoadingContainer>
);

// Protected route wrapper for authenticated users
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? children : <Navigate to="/auth" replace />;
};

// Public route wrapper for non-authenticated users
const PublicRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Navigate to="/" replace /> : children;
};

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Container>
            {currentUser && <Navbar currentUser={currentUser} />}
            
            <MainContent>
              <Suspense fallback={<SuspenseLoader />}>
                <Routes>
                  {/* Public Routes */}
                  <Route 
                    path="/auth" 
                    element={
                      <PublicRoute>
                        <Authentication />
                      </PublicRoute>
                    } 
                  />
                  
                  {/* Protected Routes */}
                  <Route 
                    path="/" 
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } 
                  />
                  
                  <Route 
                    path="/workouts" 
                    element={
                      <ProtectedRoute>
                        <Workouts />
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* NEW: Exercise Library Route - Your Professional Component */}
                  <Route 
                    path="/exercises" 
                    element={
                      <ProtectedRoute>
                        <ExerciseLibrary />
                      </ProtectedRoute>
                    } 
                  />
                  
                  {/* Catch-all redirect */}
                  <Route 
                    path="*" 
                    element={
                      currentUser ? <Navigate to="/" replace /> : <Navigate to="/auth" replace />
                    } 
                  />
                </Routes>
              </Suspense>
            </MainContent>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
