import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

const LoginButton = () => {
  //const { loginWithRedirect } = useAuth0();

  //return <button onClick={() => loginWithRedirect()}>Log In</button>;

  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);

  // Show loading state while authentication state is being determined
  if (!user && isAuthenticated) {
    return <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />;
  }

  if (isAuthenticated && user) {
    return (
      <div className="relative mx-5 flex items-center justify-center">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="focus:outline-none"
        >
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name || 'Profile'}
              className="h-8 w-8 rounded-full border-2 border-gray-200 object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-medium text-white">
              {user.name?.charAt(0) || user.email?.charAt(0) || '?'}
            </div>
          )}
        </button>

        {showDropdown && (
          <div className="ring-opacity-5 absolute top-8 right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 ring-1 shadow-lg ring-black">
            <div className="px-4 py-2 text-sm text-gray-700">
              {user.name || user.email}
            </div>
            <button
              onClick={() => logout()}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="hover:bg-secondary mr-5 ml-5 rounded-md bg-white px-4 py-2 text-sm font-medium text-black duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:mr-0"
    >
      Log In
    </button>
  );
};

export default LoginButton;
