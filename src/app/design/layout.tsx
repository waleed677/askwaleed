export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-[90%]">
      {/* Main Content */}
      {children}
    </div>
  );
} 