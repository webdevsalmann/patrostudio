import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
export const navigationLinks = [
    {
        title: "Home",
        path: "/",
        varient: "ghost"
    },
    {
        title: "About",
        path: "/about",
        varient: "ghost"
    },
    {
        title: "Services",
        path: "/services",
        varient: "ghost"
    },
    {
        title: "Contact Me",
        path: "/contact",
        varient: ""
    }
]

export default function NavigationLinks() {
    const path = usePathname();

    return (
        <>
            {navigationLinks.map((item) => (
                <li key={item.title}>
                    <Link className={`${buttonVariants({ variant: item.varient, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.path}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </>
    )
}
