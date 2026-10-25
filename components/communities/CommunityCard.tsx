import Image from "next/image";
import { formatNumber } from "@/lib/format";

type Props = {
  slug: string;
  name: string;
  members: number;
  icon: string;
};

export default function CommunityCard({ name, members, icon }: Props) {
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-border bg-card p-4">
      <Image src={icon} alt={name} width={36} height={36} />
      <h3 className="text-[17px] font-bold text-foreground">{name}</h3>
      <p className="text-[13px] text-muted">{formatNumber(members)} members</p>
      <button
        type="button"
        className="w-full rounded-lg border border-border bg-background py-1.5 text-sm text-foreground hover:bg-border"
      >
        Join
      </button>
    </div>
  );
}