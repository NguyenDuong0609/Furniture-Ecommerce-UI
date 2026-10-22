"use client";

export default function EmailReceiptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>{`
        body > div > nav,
        body > div > footer {
          display: none !important;
        }
      `}</style>
      <div style={{ margin: 0, padding: 0 }}>
        {children}
      </div>
    </>
  );
}
