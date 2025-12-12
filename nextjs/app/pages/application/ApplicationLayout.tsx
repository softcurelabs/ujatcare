"use client";
export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-[#00acc1] bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg-pattern.png")' }}
    >
        {children}
    </div>
  );
}
