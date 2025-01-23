import { Banner } from "../Banner";
import { Footer } from "../Footer";

interface LayoutProps {
  children: unknown;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  );
}
