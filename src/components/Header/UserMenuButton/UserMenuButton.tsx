"use client";

import { Session } from "next-auth";
import profilePicPlaceholder from "@/assets/images/header/profile-pic-placeholder.png";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { PiSignOut, PiSignIn } from "react-icons/pi";
import { RiSettings3Line } from "react-icons/ri";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="cursor-pointer rounded-full duration-300 hover:text-secondary"
      >
        {user ? (
          <Image
            src={user?.image || profilePicPlaceholder}
            alt="Profile picture"
            width={35}
            height={35}
            className="w-7 rounded-full"
          />
        ) : (
          <span className="text-xl">
            <FaRegUserCircle />
          </span>
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-box bg-base-100 p-5 shadow"
      >
        {user && (
          <li className="mb-3">
            <Link
              className="btn btn-outline rounded-full hover:btn-secondary"
              href={"/profile"}
            >
              <span className="mr-1 text-2xl">
                <RiSettings3Line />
              </span>
              Settings
            </Link>
          </li>
        )}
        <li>
          {user ? (
            <button
              className="btn btn-primary rounded-full hover:btn-secondary"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <span className="mr-1 text-xl">
                <PiSignOut />
              </span>
              Sign Out
            </button>
          ) : (
            <button
              className="btn btn-primary rounded-full hover:btn-secondary"
              onClick={() => signIn()}
            >
              <span className="mr-1 text-xl">
                <PiSignIn />
              </span>
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
