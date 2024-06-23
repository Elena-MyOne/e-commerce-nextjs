import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function PrimaryButton({
  text,
  href,
  className,
}: PrimaryButtonProps) {
  return (
    <div className="flex justify-center pb-5 md:justify-start lg:pb-10">
      <Link
        href={href}
        className={`btn btn-primary rounded-full px-14 hover:btn-secondary ${className}`}
      >
        <span className="">{text}</span>
      </Link>
    </div>
  );
}
