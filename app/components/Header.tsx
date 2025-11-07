import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-header-bg border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.svg"
              alt="Sandy Icon"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-foreground">Sandy</h1>
          </div>

          <div className="hidden md:block">
            <p className="text-lg font-medium text-foreground/80">
              Extension Sandbox
            </p>
          </div>

          <button className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-card-bg transition-colors hover:bg-accent-hover">
            Create New Extension
          </button>
        </div>
      </header>
  )
}
