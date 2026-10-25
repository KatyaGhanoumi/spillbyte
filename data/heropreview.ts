export const heroPreviewData = [
    {
        id:1,
        author:"Ahmad Ahmad",
        time:2,
        topic: "Next.js",
        title: "Why does useEffect run twice in development mode?", 
        excerpt: 
        "I'm building a Next.js app and noticed that useEffect runs twice in development mode. Is this expected? What's the best way to handle it?",
        replies: 12,
        likes: 24, 
        reply:{
            author: "Katya akilov",
            time: 1,
            text:"Yes, this is expected behavior in React 18. It's a part of Strict Mode to help find side effects. In production, it will only run once. To handle this, you can use a ref to track if the effect has already run or use a state variable to conditionally execute your logic.", 
        },
        moreReplies: 3
    },
]