import { useParams } from "react-router-dom";

interface RepositoryProps {}

export default function Repository({}: RepositoryProps) {
  const route = useParams();
  return <>{route.id}</>;
}
