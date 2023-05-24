import { Navigator } from "@/features/Navigator";
import { Pagination } from "@/features/Pagination";

import AllRepositories from "@/widgets/repo/AllRepositories/ui/AllRepositories";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const navigatorRef = useRef<HTMLElement | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  function setPage(page: number) {
    setSearchParams({
      query: searchParams.get("query") ?? "",
      page: page.toString(),
    });
  }

  return (
    <>
      <section
        className="container"
        ref={navigatorRef}
        style={{ paddingTop: "2rem" }}
      >
        <AllRepositories />
      </section>{" "}
      <Navigator container={navigatorRef} />
      <Pagination
        currentPage={searchParams.get("page") ?? "1"}
        setPage={setPage}
      />
    </>
  );
}
