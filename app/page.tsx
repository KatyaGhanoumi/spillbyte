import Hero from "@/components/home/Hero";
import CommunityCard from "@/components/communities/CommunityCard";
import { communities } from "@/data/communities";

export default function Home() {
  return (
      <>
        <Hero />
        <section className="mx-auto w-full max-w-[1560px] px-6 pb-20 sm:px-8 lg:px-10">
          <h2 className="mb-6 text-xl font-semibold">Popular communities</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
            {communities.map((community) => (
              <CommunityCard key={community.slug} {...community} />
            ))} 
          </div>
          </section> 
      </>
  );
}
