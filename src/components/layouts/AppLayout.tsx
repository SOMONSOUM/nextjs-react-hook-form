import { Footer } from "../Footer";
import { Header } from "../Header";

export const AppLayout: React.FC<{
  children: React.ReactNode;
  pageTitle?: string;
}> = ({ children, pageTitle }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      {children}
      <Footer />
    </>
  );
};
