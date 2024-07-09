import { ArrowRight, CheckCheck } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ZoomIn from "../animaitons/ZoomIn";
import FadeLeft from "../animaitons/FadeLeft";
import { delay } from "framer-motion";

export default function ServiceCard({ data: { icon, title, description, lists, link } }) {
    return (
        <div className="relative p-4 h-full w-full hover:bg-gradient-to-bl from-background to-secondary/55 border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.1
                }}>
                <div>{icon}</div>
            </FadeLeft>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.3
                }}>
                <div className="my-base text-lg font-semibold">{title}</div>
            </FadeLeft>
            <ul className="text-muted-foreground">
                {lists.map((item, i) => (
                    <FadeLeft
                        transition={{
                            type: "spring",
                            delay: i * 0.3
                        }}
                        key={item.title + "ServiceList"}>
                        <li className="flex gap-2 items-center text-muted-foreground group leading-8">
                            <CheckCheck className="size-5 shrink-0 group-hover:text-primary" /> <div>{item.title}</div>
                        </li>
                    </FadeLeft>
                ))}
            </ul>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.7
                }}>
                <Link className={`${buttonVariants({ variant: "outline" })} mt-base hover:bg-primary hover:text-black group`} href={link}>View More  <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" /></Link>
            </FadeLeft>
        </div >
    )
}
