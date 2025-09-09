import { Link, Outlet } from "react-router-dom";
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className='rootLayout'>
          <header>
              <Link to="/" className="logo">
                <img src="/logo.png" alt="logo" />
                <span>Yossihacker AI</span>
              </Link>
              <div className="user">
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
          </header>
          <main>
            <Outlet/>
          </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;