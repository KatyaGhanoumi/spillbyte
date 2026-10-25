import Hero from "@/components/home/Hero";
import CommunityCard from "@/components/communities/CommunityCard";
import { communities } from "@/data/communities";
import Link from "next/link";
import { posts } from "@/data/posts";
import PostCard from "@/components/blogs/PostCard";
import FeedTabs from "@/components/home/FeedTabs";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular communities</h2>
          <Link href="/communities" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
          {communities.map((community) => (
            <CommunityCard key={community.slug} {...community} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Fresh spills</h2>
          <FeedTabs />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}