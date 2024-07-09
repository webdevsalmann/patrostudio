import { Aperture, Film, PencilRuler } from "lucide-react";

export const services = [
    {
        icon: <Aperture className="size-8 group-hover:text-primary" />,
        title: "Photo Shoot",
        description: "Jumpstart and establish your brand with your first website or get your existing website redesigned/updated.",
        lists: [
            {
                title: "Product Photoshoots",
                images: [
                    "/images/services/photo-shoot/product/1.jpg",
                    "/images/services/photo-shoot/product/2.jpg",
                    "/images/services/photo-shoot/product/3.jpg",
                    "/images/services/photo-shoot/product/4.jpg",
                ]
            },
            {
                title: "Event Photoshoots",
                images: [
                    "/images/services/photo-shoot/event/1.jpg",
                    "/images/services/photo-shoot/event/2.jpg",
                    "/images/services/photo-shoot/event/3.jpg",
                    "/images/services/photo-shoot/event/4.jpg",
                ]
            },
            {
                title: "Custom Photoshoots",
                images: [
                    "/images/services/photo-shoot/custom/1.jpg",
                    "/images/services/photo-shoot/custom/2.jpg",
                    "/images/services/photo-shoot/custom/3.jpg",
                    "/images/services/photo-shoot/custom/4.jpg",
                ]
            }
        ],
        link: "/services/photo-shoot"
    },
    {
        icon: <Film className="size-8 group-hover:text-primary" />,
        title: "Video Editing",
        description: "Anything from Website Updates, Bug Fixes, Content changes, or additions of any kind.",
        lists: [
            {
                title: "Promotional Videos",
                images: [
                    "/images/services/video-editing/promotional/1.jpg",
                    "/images/services/video-editing/promotional/2.jpg",
                    "/images/services/video-editing/promotional/3.jpg",
                    "/images/services/video-editing/promotional/4.jpg",
                ]
            },
            {
                title: "Editing Services",
                images: [
                    "/images/services/video-editing/editing/1.jpg",
                    "/images/services/video-editing/editing/2.jpg",
                    "/images/services/video-editing/editing/3.jpg",
                    "/images/services/video-editing/editing/4.jpg",
                ]
            },
            {
                title: "Motion Graphics",
                images: [
                    "/images/services/video-editing/motion/1.jpg",
                    "/images/services/video-editing/motion/2.jpg",
                    "/images/services/video-editing/motion/3.jpg",
                    "/images/services/video-editing/motion/4.jpg",
                ]
            }
        ],
        link: "/services/video-editing"
    },
    {
        icon: <PencilRuler className="size-8 group-hover:text-primary" />,
        title: "Graphic Design",
        description: "Get your website loading faster. A slow site can easily loose visitors and customers.",
        lists: [
            {
                title: "Social Media Graphics",
                images: [
                    "/images/services/graphic-designing/social-media/1.jpg",
                    "/images/services/graphic-designing/social-media/2.jpg",
                    "/images/services/graphic-designing/social-media/3.jpg",
                    "/images/services/graphic-designing/social-media/4.jpg",
                ]
            },
            {
                title: "Branding Design",
                images: [
                    "/images/services/graphic-designing/brand/1.jpg",
                    "/images/services/graphic-designing/brand/2.jpg",
                    "/images/services/graphic-designing/brand/3.jpg",
                    "/images/services/graphic-designing/brand/4.jpg",
                ]
            },
            {
                title: "Print Design",
                images: [
                    "/images/services/graphic-designing/print/1.jpg",
                    "/images/services/graphic-designing/print/2.jpg",
                    "/images/services/graphic-designing/print/3.jpg",
                    "/images/services/graphic-designing/print/4.jpg",
                ]
            }
        ],
        link: "/services/graphic-design",
    },
];