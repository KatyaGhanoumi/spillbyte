
import Link from "next/link";
export default function Hero(){
    return(
       <section className="mx-auto w-full max-w-[1560px] px-6 py-20 sm:px-8 lg:px-10">
            <p className="text-xs uppercase tracking-widest text-muted">Developer Community</p>
            <h1 className="mt-4 max-w-xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Got something 
                <br />
                to spill?
            <span aria-hidden="true" className="ml-2 text-accent">|</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
        Share your knowledge, ask questions, and connect with developers around
        the world. From quick tips to in-depth discussions, this is your space
        to learn, share and grow.</p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
        <Link href="/create"  className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90">Start a post</Link>
        <Link href="/communities" className="text-foreground underline underline-offset-4">Explore communities</Link>
        </div>
       </section> 
    );
};
