import { getOneRepoQuery } from "../model/getOneRepoQuery";
import { LoadingSpinner } from "@/shared/Loading";

import { useQuery } from "@apollo/client";
import { Repository } from "@/entities/repo/Repository";

import ErrorMessage from "@/shared/ErrorMessage/ui/ErrorMessage";

export default function RepositoryPage({
  name,
  owner,
}: {
  name: string;
  owner: string;
}) {
  const { data, loading, error } = useQuery(getOneRepoQuery, {
    variables: { name, owner },
  });

  return (
    <>
      {error && (
        <ErrorMessage
          renderRefreshButton
          error="Error fetching this repo. Wanna try again?"
        />
      )}
      {loading && !error ? (
        <LoadingSpinner />
      ) : (
        //@ts-expect-error -_-
        <>{data && <Repository {...data.repository} />}</>
      )}
    </>
  );
}
