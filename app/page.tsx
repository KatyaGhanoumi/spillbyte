export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-6">
      <p className="text-sm uppercase tracking-widest text-muted">
        Developer community
      </p>
      <h1 className="text-5xl font-semibold tracking-tight">
        Got something to spill?
      </h1>
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-muted">This card uses the SpillByte color tokens.</p>
      </div>
      <button
        type="button"
        className="w-fit rounded-lg bg-accent px-5 py-3 font-medium text-background"
      >
        Start a post
      </button>
    </main>
  );
}