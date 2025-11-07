import Plus from "../icons/svg/Plus";
import MarkedCheckbox from "../icons/svg/MarkedCheckbox";

export default function ExtensionWorkspace() {
  return (
    <div className="rounded-md border-2 border-dashed border-border bg-background p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent/20 p-4">
                <Plus />
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Start Building Your Extension
            </h3>
            <p className="mb-6 text-foreground/70">
              Sandy makes it easy to create, manage, and test browser
              extensions. Click the &quot;Create New Extension&quot; button
              above to get started with a new project.
            </p>
            <div className="space-y-2 text-left">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <MarkedCheckbox />
                </div>
                <p className="text-sm text-foreground/80">
                  Choose from multiple browser targets (Chrome, Firefox,
                  Safari, Edge)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <MarkedCheckbox />
                </div>
                <p className="text-sm text-foreground/80">
                  Scaffold projects with best practices and modern tooling
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-accent">
                  <MarkedCheckbox />
                </div>
                <p className="text-sm text-foreground/80">
                  Test and debug your extensions in a sandbox environment
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}
