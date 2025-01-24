import { Banner } from "../Banner";
import { Footer } from "../Footer";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  );
}
