import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function ApolloClientProvider({ children }: AppProvidersProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
