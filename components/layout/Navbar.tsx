import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return (
        <header className="border-b border-border bg-background">
            <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
                <Link href="/"  className="text-foreground">
                    <Image src="/spillbyte-logo.svg" alt="Spillbyte"
                        width={120}
                        height={46}
                        priority
                        className="h-auto w-[120px]"/>
                </Link>
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-sm text-muted hover:text-foreground">Explore</Link>
                    <Link href="/communities" className="text-sm text-muted hover:text-foreground">Communities</Link>
                    <Link href="/blogs"  className="text-sm text-muted hover:text-foreground">Blogs</Link>
                    <button type="button" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">Sign in</button>
                </div>
            </nav>
        </header>
    );
}
