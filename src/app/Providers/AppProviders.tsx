import ApolloClientProvider from "./Apollo/ApolloClientProvider";
import ClientLayout from "./Layout/ClientLayout";
import RouterClientProvider from "./Router/RouterClientProvider";

export default function AppProviders() {
  return (
    <ApolloClientProvider>
      <RouterClientProvider />
    </ApolloClientProvider>
  );
}
