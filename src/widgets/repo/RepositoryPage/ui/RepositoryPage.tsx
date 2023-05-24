import { getOneRepoQuery } from "../model/getOneRepoQuery";
import { LoadingSpinner } from "@/shared/Loading";

import { IOneRepo } from "../types/oneRepo";
import { classNames } from "@/features/classNames";
import { useQuery } from "@apollo/client";
import { Repository } from "@/entities/repo/Repository";
import { OneRepoQuery } from "@/gql/graphql";
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
        <>{data && <Repository {...data.repository} />}</>
      )}
    </>
  );
}
