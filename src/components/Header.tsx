import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-border-light">
      <nav className="max-w px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                MeroLagani
              </Link>
            </div>

          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button className="bg-blue-600 text-xs
text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
