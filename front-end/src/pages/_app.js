import "@/styles/globals.css";
import { ContextProvider } from "@/components/utils/Context";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
