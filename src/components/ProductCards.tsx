"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { products } from "../data/products";
import type { CartItem } from "../app/page";

const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "/JohnManjeetSeed"
        : "";

type ProductCardsProps = {
    onAddToCart: (product: Omit<CartItem, "qty">) => void;
};

export default function ProductCards({
                                         onAddToCart,
                                     }: ProductCardsProps) {
    return (
        <section
            id="shop"
            className="-mt-[2rem] bg-[#071a33] px-4 pb-28 pt-32 text-white md:px-6 md:pt-40"
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-14 grid gap-10 md:mb-20 md:grid-cols-[1.1fr_0.8fr_0.3fr] md:items-end">
                    <h2 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.05em] text-white md:text-6xl">
                        Whole body health starts in the gut.
                    </h2>

                    <p className="max-w-md text-lg leading-7 text-white/85">
                        Formulations that provide sustained support using key
                        scientifically and clinically-studied ingredients
                    </p>

                    <a className="justify-self-start border-b border-white pb-1 font-semibold text-white md:justify-self-end">
                        Shop All →
                    </a>
                </div>

                <div className="grid grid-cols-2 items-stretch gap-4 md:grid-cols-4 md:items-start md:gap-5">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({
                         product,
                         index,
                         onAddToCart,
                     }: {
    product: (typeof products)[number];
    index: number;
    onAddToCart: (product: Omit<CartItem, "qty">) => void;
}) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = async () => {
        const video = videoRef.current;
        if (!video) return;

        try {
            video.currentTime = 0;
            await video.play();
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
        }
    };

    const stopVideo = () => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        video.currentTime = 0;
        setIsPlaying(false);
    };

    const toggleVideo = () => {
        if (isPlaying) {
            stopVideo();
        } else {
            playVideo();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.4rem] bg-[#2f5587] p-4 text-center text-white transition-all duration-500 hover:z-20 hover:-translate-y-4 hover:scale-[1.03] hover:bg-[#3a6699] hover:shadow-2xl hover:shadow-black/30 md:min-h-[500px] md:p-6"
        >
            <div className="mx-auto mb-3 inline-flex rounded-full border border-white/80 px-3 py-1 text-[10px] text-white md:mb-4 md:text-xs">
                {product.code}
            </div>

            <h3 className="min-h-[48px] text-xl font-medium leading-tight text-white md:min-h-0 md:text-2xl">
                {product.name}
            </h3>

            <div
                className={`relative mx-auto mt-4 h-[170px] w-full overflow-visible transition-transform duration-500 md:mt-10 md:h-[220px] md:group-hover:scale-125 ${
                    isPlaying ? "scale-125" : ""
                }`}
                onClick={toggleVideo}
                onMouseEnter={playVideo}
                onMouseLeave={stopVideo}
            >
                <Image
                    src={`${BASE_PATH}/First.png`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 40vw, 350px"
                    className={`object-contain transition-all duration-500 group-hover:scale-110 group-hover:opacity-0 ${
                        isPlaying ? "scale-110 opacity-0" : "opacity-100"
                    }`}
                />

                <video
                    ref={videoRef}
                    className={`absolute inset-0 h-full w-full object-contain mix-blend-screen transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 ${
                        isPlaying ? "scale-110 opacity-100" : "opacity-0"
                    }`}
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source
                        src={`${BASE_PATH}/3d.webm`}
                        type="video/webm"
                    />
                </video>
            </div>

            <button
                onClick={() =>
                    onAddToCart({
                        id: product.id,
                        name: product.name,
                        subtitle: product.subtitle,
                        price: product.price,
                    })
                }
                className="mt-auto rounded-full bg-[#052b4f] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#052b4f] md:mt-5 md:px-7 md:py-3 md:text-base"
            >
                Shop Now

                <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          →
        </span>
            </button>

            <p className="mt-4 text-[11px] leading-4 tracking-wide text-white/60 md:mt-8 md:text-xs">
                Starting at ${product.price}.99 per month
            </p>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>
        </motion.div>
    );
}