import React from "react";
import FooterComponent from "./footer";

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export default function Layout({ children }: LayoutProps): React.ReactElement {
    return (
      <main className="flex flex-col flex-grow overflow-auto">
        <div className="flex-grow">
            {children}
        </div>
        <FooterComponent />
      </main>
    );
  }