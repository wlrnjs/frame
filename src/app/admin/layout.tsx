// src/app/admin/layout.tsx

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 mt-20">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </nav>
      <main className="p-8">{children}</main>
    </div>
  );
}
