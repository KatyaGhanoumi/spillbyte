import Link from "next/link";

type Props = {
    slug: string;
    title: string;
    excerpt: string;
    topic: string;
    replies: number;
    readTime: number;
}

export default function PostCard({ slug, title, excerpt, topic, replies, readTime }: Props) {
    return (
        <Link href={`/blogs/${slug}`} className="flex h-full w-full flex-col gap-3 rounded-xl border border-border bg-card p-5 hover:border-accent">
            <span className="w-fit rounded-md bg-background px-2 py-1 text-xs text-muted">{topic}</span>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="line-clamp-3 text-sm text-muted">{excerpt}</p>
            <div className="mt-auto flex items-center justify-between text-sm text-muted">
                    <span>{replies} replies</span>
                    <span>{readTime} min read</span>
                </div>
        </Link>
    );

};
