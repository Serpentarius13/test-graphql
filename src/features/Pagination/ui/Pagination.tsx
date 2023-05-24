import { useRepoStore } from "@/widgets/repo/AllRepositories/models/store/useRepoStore";
import cls from "./Pagination.module.scss";
import { roundTo } from "@/features/roundTo";
import { useEffect, useMemo, useRef, useState } from "react";

import { classNames } from "@/features/classNames";

interface PaginationProps {
  currentPage: string;
  setPage: (page: number) => void;
}

export default function Pagination({ currentPage, setPage }: PaginationProps) {
  const fetchedPages = useRepoStore((state) => state.fetchedPages);

  const [curPage, setCurPage] = useState<number>(+currentPage);

  const buttons = useMemo(() => {
    const min = roundTo(curPage - 4, 1);
    const max = roundTo(curPage + 5, null);

    const numbers = Array.from({ length: max - min + 1 }, (_, index) => {
      if (fetchedPages[min + index]) return index + min;
    }).filter(Boolean);

    while (numbers.length < 10) {
      const nextNumber = (numbers.at(-1) ?? max) + 1;
      if (fetchedPages[nextNumber] && !numbers.includes(nextNumber))
        numbers.push(nextNumber);
      else numbers.push(undefined);
    }

    return numbers.filter(Boolean);
  }, [fetchedPages, curPage]);

  function setCurrentPage(page: number) {
    setCurPage(page);

    const element = document.querySelector(`[data-page="${page}"]`);

    setPage(page);

    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    setCurPage(+currentPage);
  }, []);

  return (
    <aside className={cls.pagination}>
      <nav>
        {buttons &&
          buttons.map((b) => (
            <button
              key={b}
              className={classNames("borderline", [], {
                [cls.active]: b === curPage,
              })}
              onClick={() => setCurrentPage(b)}
            >
              {b}
            </button>
          ))}{" "}
      </nav>
    </aside>
  );
}
