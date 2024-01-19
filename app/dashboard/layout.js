export default function DashboardLayout({
  children,
  growth,
  finance,
  analytics,
  marketing,
}) {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          {analytics}
          {growth}
        </div>
        <div className="p-8 shadow-md rounded-md">{children}</div>
        <div className="flex flex-col gap-4">
          {marketing}
          {finance}
        </div>
      </section>
    </>
  );
}
