"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { set } from "mongoose";

const NavBar = () => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="Prompt Library"
          width={50}
          height={50}
          className="object-contain rounded-full"
        />
        <p className="logo_text">PromptSprout</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="assets/images/profile.svg"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="flex">
            <Image
              src="assets/images/profile.svg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
              onClick={() => setDropDown((prev) => !prev)}
            />
            {dropDown && (
              <div className="dropdown">
                <Link 
                  href="/profile" 
                  className="dropdown_link text-left"
                  onClick={() => setDropDown(false)}>
                  My Profile
                </Link>
                <Link 
                  href="/create-prompt" 
                  className="dropdown_link text-left"
                  onClick={() => setDropDown(false)}>
                  Create Prompt
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
