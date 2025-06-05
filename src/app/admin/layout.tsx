import AdminGnb from "@/admin/components/layout/AdminGnb";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-gray-100">
      <AdminGnb />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
