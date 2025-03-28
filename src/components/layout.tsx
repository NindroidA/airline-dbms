import React from "react";
import FooterComponent from "./footer";
import NavbarComponent from "./navbar";

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export default function Layout({ children }: LayoutProps): React.ReactElement {
    return (
      <div className="relative flex flex-col min-h-screen">
        {/* gradient background */}
        <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#1E2228_40%,#63e_100%)]" />
        
        <NavbarComponent />
        
        <main className="flex-grow container mx-auto px-4 py-6 text-white">
          {children}
        </main>
        
        <FooterComponent />
      </div>
    );
  }