export default function MainView({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-border bg-card-bg p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Extension Workspace
          </h2>
        </div>
        <>
          {children}
        </>
      </div>
    </main>
  )
}
