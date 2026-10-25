
type Props = {
    id: number;
    author: string;
    time: number;
    topic: string;
    title: string;
    excerpt: string;
    replies: number;
    likes: number;
    reply: {author: string; time: number; text: string};
    moreReplies: number;
};
function Avatar({name}: {name: string}){
    return(
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-border text-xs font-medium text-foreground">
            {name.charAt(0)}
        </span>
    );
};

export default function HeroPreview({
    author, time, topic, title, excerpt, replies, likes, reply, moreReplies }:
     Props){
    return(
       <div className="rounded-2xl border border-border bg-card p-5 shadow-lg">
            <div className="flex items-center gap-3">
                <Avatar name={author}/>
                <div className="leading-tight">
                    <p className="text-sm font-medium text-foreground">{author}</p>
                    <p className="text-xs text-muted">{time}h ago . {topic}</p>
                </div>
            </div>

            <h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2>

            <div className="mt-3 flex gap-3">
                <span aria-hidden="true" className="text-3xl leading-none text-accent">“</span>
                <p className="text-sm leading-6 text-muted">{excerpt}</p>
            </div>

            <div className="mt-4 flex items-center gap-5 text-sm text-muted">
                <span>{replies} replies</span>
                <span>♡ {likes}</span>
            </div>

            <div className="my-4 border-t border-border" />

            <div className="flex gap-3">
                <Avatar name={reply.author}/>
                <div>
                    <p className="text-sm text-foreground">{reply.author} <span className="text-xs text-muted">{reply.time}h ago</span>
                    </p> 
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{reply.text}</p>
                    <span className="mt-2 inline-block text-sm text-accent">View {moreReplies} more replies</span>
                </div>
            </div>
       </div>
    );

};
