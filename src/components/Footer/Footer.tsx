import Link from "next/link";
import SocialIcons from "./SocialIcons/SocialIcons";

export default function Footer() {
  return (
    <>
      <footer className="footer m-auto bg-base-100 p-5 md:container sm:p-10">
        <div className="flex flex-col gap-2 sm:gap-5">
          <Link
            href="/"
            className="font-custom text-lg duration-300 hover:text-secondary sm:text-2xl"
          >
            Shop.co
          </Link>
          <p className="max-w-[300px]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <SocialIcons />
        </div>
        <nav>
          <h6 className="font-semibold">Company</h6>
          <ul>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              About
            </li>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              Features
            </li>
            <li className="cursor-pointer text-info duration-300 hover:text-secondary">
              Works
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-semibold">Help</h6>
          <ul>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              Customer Support
            </li>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              Delivery Details
            </li>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              Privacy Policy
            </li>
            <li className="cursor-pointer text-info duration-300 hover:text-secondary">
              Terms & Conditions
            </li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-semibold">FAQs</h6>
          <ul>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              Account
            </li>
            <li className="mb-2 cursor-pointer text-info duration-300 hover:text-secondary">
              Orders
            </li>
            <li className="cursor-pointer text-info duration-300 hover:text-secondary">
              Payments
            </li>
          </ul>
        </nav>
      </footer>
      <footer className="m-auto border-t border-base-200 bg-base-100 p-5 text-center text-sm md:container sm:p-10">
        <p className="pb-2 text-info">
          Shop.co &copy; 2000 - {new Date().getFullYear()}. All Rights Reserved
        </p>
        <p className="text-info">
          Developed by{" "}
          <a
            className="cursor-pointer text-warning duration-300 hover:text-secondary"
            target="_blank"
            rel="noreferrer noopener"
          >
            MyOne
          </a>
        </p>
      </footer>
    </>
  );
}
