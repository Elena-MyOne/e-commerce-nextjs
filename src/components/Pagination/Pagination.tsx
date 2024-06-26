import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  query,
}: PaginationProps) {
  const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

  const numberedPageItems: JSX.Element[] = [];

  for (let page = minPage; page <= maxPage; page += 1) {
    numberedPageItems.push(
      <Link
        href={`?query=${query}&page=${page}`}
        key={page}
        className={`btn join-item ${currentPage === page ? "btn-primary pointer-events-none" : "btn-outline border-gray-300"}`}
      >
        {page}
      </Link>,
    );
  }

  return (
    <>
      <div className="join hidden sm:block">{numberedPageItems}</div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link
            href={`?query=${query}&page=${currentPage - 1}`}
            className="btn btn-outline join-item border-gray-300"
          >
            «
          </Link>
        )}
        <button className="btn btn-outline join-item pointer-events-none border-gray-300">
          Page {currentPage}
        </button>
        {currentPage < totalPages && (
          <Link
            href={`?query=${query}&page=${currentPage + 1}`}
            className="btn btn-outline join-item border-gray-300"
          >
            »
          </Link>
        )}
      </div>
    </>
  );
}
