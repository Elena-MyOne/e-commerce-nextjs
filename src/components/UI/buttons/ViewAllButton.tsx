import Link from "next/link";

interface ViewAllButtonProps {
  query: string;
}

export default function ViewAllButton({ query }: ViewAllButtonProps) {
  return (
    <div className="flex items-center justify-center pb-5 lg:pb-10">
      <Link
        href={`/category?query=${query}`}
        className="btn btn-outline rounded-full px-14"
      >
        <span className="">View All</span>
      </Link>
    </div>
  );
}
