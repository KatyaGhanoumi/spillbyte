import Hero from "@/components/home/Hero";
import CommunityCard from "@/components/communities/CommunityCard";
import { communities } from "@/data/communities";
import Link from "next/link";
import {posts} from "@/data/posts";
import  PostCard  from "@/components/blogs/PostCard"; 

export default function Home() {
  return (
      <>
        <Hero />

        <section className="mx-auto w-full max-w-[1560px] px-6 pb-20 sm:px-8 lg:px-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Popular communities</h2>
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

          <section className="mx-auto w-full max-w-[1560px] px-6 pb-20 sm:px-8 lg:px-10">
          
            <h2 className="mb-6 text-xl font-semibold">Fresh spills</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} {...post} />
              ))}
            </div>
        </section>
      </>
  );
}
