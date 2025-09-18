import { Navbar } from "../Nav/nav.jsx";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-6 z-50">
      {/* Navigation */}
      <div className="flex-1">
        <Navbar />
      </div>
    </header>
  );
};
