import ContentLayout from "./ContentLayout";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white px-4 py-2">
        <h1 className="text-2xl font-bold">My Portfolio Admin</h1>
      </header>
      {/* Content */}
      <ContentLayout/>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-2 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio Admin - Aldi Ramdani</p>
      </footer>
    </div>
  );
};

export default MainLayout;
