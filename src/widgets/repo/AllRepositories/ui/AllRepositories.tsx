import { useQuery } from "@apollo/client";
import cls from "./AllRepositories.module.scss";
import { allRepoQuery } from "../models/allRepoQuery";

import { useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "@/shared/Loading";

import { useRepoStore } from "../models/store/useRepoStore";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { RepositoryCard } from "@/entities/repo/RepositoryCard";
import { TextInput } from "@/shared/input/TextInput";

import ErrorMessage from "@/shared/ErrorMessage/ui/ErrorMessage";

export default function AllRepositories() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page");
  const queryParam = searchParams.get("query");
  const {
    hasMore,

    fetchedPages,
    addFetchedPage,

    clearRepos,
    getLastPage,
  } = useRepoStore();

  const queryP = queryParam ?? "";
  let page = pageParam ? +pageParam : 1;
  const min = Math.min(getLastPage() + 1, page);
  page = isNaN(min) ? 1 : min;

  const [query, setQuery] = useState<string>(queryP);

  function clearStorage() {
    //@ts-expect-error Persist is undefined
    useRepoStore.persist.clearStorage();
    clearRepos();
  }

  const { loading, error } = useQuery(allRepoQuery, {
    skip: !!fetchedPages[page] && !!query,
    onCompleted(newRepos) {
      if (query === "") clearStorage();
      else {
        addFetchedPage(page, newRepos);
        console.log(page);
      }
    },

    variables: { query, endMarker: fetchedPages[page - 1]?.endMarker },
  });
  const handleSetQuery = (e: ChangeEvent) => {
    setQuery((state) => {
      const { value } = e.target as HTMLInputElement;

      setSearchParams({ query, page: "1" });

      clearStorage();

      return value;
    });
  };

  const observer = useRef<IntersectionObserver>();

  const lastRepository = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && query) {
          setSearchParams({ page: (page + 1).toString(), query });
        }
      });

      if (node) observer.current.observe(node);
    },
    [observer, query, loading, page, setSearchParams, hasMore]
  );

  return (
    <>
      <TextInput
        onChange={handleSetQuery}
        value={query}
        placeholder="Введите название репозитория"
        className={cls.input}
      />

      {error && (
        <ErrorMessage
          renderRefreshButton
          error="There was an error fetching repositories. Wanna try again?"
        />
      )}

      {loading && !fetchedPages[1] && !error ? (
        <LoadingSpinner />
      ) : (
        <ul className={cls.allRepos}>
          {Object.values(fetchedPages).map((p, ix) => (
            <li key={ix} data-page={ix + 1}>
              <ul className={cls.repos}>
                {p.repos?.map((repo, id) => (
                  <RepositoryCard
                    {...repo}
                    key={id}
                    last={id === p.repos.length - 1 ? lastRepository : null}
                  />
                ))}
              </ul>
            </li>
          ))}

          {hasMore && loading ? (
            <LoadingSpinner />
          ) : (
            <> {fetchedPages[0] && <li className={cls.end}>Конец</li>}</>
          )}
        </ul>
      )}
    </>
  );
}
