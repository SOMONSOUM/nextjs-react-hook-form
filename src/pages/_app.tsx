import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
const Noop: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const pageTitle = (Component as any).pageTitle;
  return (
    <Layout {...pageProps} pageTitle={pageTitle}>
      <Component {...pageProps} />
    </Layout>
  );
}
