import ApolloClientProvider from "./Apollo/ApolloClientProvider";

import RouterClientProvider from "./Router/RouterClientProvider";

export default function AppProviders() {
  return (
    <ApolloClientProvider>
      <RouterClientProvider />
    </ApolloClientProvider>
  );
}
