import React from 'react';
import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ children }) {
  // Remplace cette ligne par ta propre logique d'authentification
  const isAuthenticated = true; // Par exemple, remplace 'true' par une vraie vérification

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
