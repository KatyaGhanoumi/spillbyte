import Image from "next/image";
import {formatNumber} from "@/lib/format";

type Props ={
    slug: string;
    name: string;
    members: number;
    icon: string
};
export default function CommunityCard({name, members, icon}: Props) {
    return(
        <div className="flex h-full w-full flex-col gap-3 rounded-xl border border-border bg-card p-5">
             <Image src={icon} alt={name} width={40} height={40}/>
             <h3 className="font-semibold text-foreground">{name}</h3>
             <p className="text-sm text-muted">{formatNumber(members)} members</p>
             <button type="button" className="mt-2 w-full rounded-lg border border-border bg-background py-2 text-sm text-foreground hover:bg-border">Join</button>
        </div>

    );

};
