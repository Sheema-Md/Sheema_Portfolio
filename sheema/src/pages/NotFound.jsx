import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 tech-grid">
      <div className="text-center p-8 rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
        <h1 className="text-6xl font-bold font-mono text-emerald-400 mb-3">404</h1>
        <p className="text-lg text-neutral-300 mb-6">Page not found</p>
        <a href="#/" className="px-5 py-2.5 rounded-lg btn-hero text-sm font-semibold inline-block">
          Return to Architecture
        </a>
      </div>
    </div>
  );
};

export default NotFound;
