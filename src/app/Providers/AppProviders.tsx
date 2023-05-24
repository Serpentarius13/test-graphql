import ApolloClientProvider from "./Apollo/ApolloClientProvider";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";

import RouterClientProvider from "./Router/RouterClientProvider";

export default function AppProviders() {
  return (
    <ApolloClientProvider>
      <RouterClientProvider />
    </ApolloClientProvider>
  );
}
