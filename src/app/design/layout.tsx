import Link from 'next/link';

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      {children}
    </div>
  );
} 