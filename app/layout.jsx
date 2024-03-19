import "@styles/globals.css";
import NavBar from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt Library",
  description: "Discover and share prompts for writing, journaling, and more.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
