"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "../data/products";
import type { CartItem } from "../app/page";
const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "/JohnManjeetSeed"
        : "";

type ProductCardsProps = {
    onAddToCart: (product: Omit<CartItem, "qty">) => void;
};

export default function ProductCards({ onAddToCart }: ProductCardsProps) {
    return (
        <section
            id="shop"
            className="-mt-[2rem] bg-[#071a33] px-6 pb-28 pt-40 text-white"
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-20 grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.3fr] md:items-end">
                    <h2 className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.05em] text-white md:text-6xl">
                        Whole body health starts in the gut.
                    </h2>

                    <p className="max-w-md text-lg leading-7 text-white/85">
                        Formulations that provide sustained support using key scientifically
                        and clinically-studied ingredients
                    </p>

                    <a className="justify-self-start border-b border-white pb-1 font-semibold text-white md:justify-self-end">
                        Shop All →
                    </a>
                </div>

                <div className="grid items-start gap-5 md:grid-cols-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 45 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group relative min-h-[500px] overflow-hidden rounded-[1.4rem] bg-[#2f5587] p-6 text-center text-white transition-all duration-500 hover:z-20 hover:-translate-y-4 hover:scale-[1.03] hover:bg-[#3a6699] hover:shadow-2xl hover:shadow-black/30"
                        >
                            {product.badge && (
                                <div className="absolute left-3 top-3 rounded-full bg-[#dcebff] px-3 py-1 text-xs font-semibold text-[#052b4f]">
                                    {product.badge}
                                </div>
                            )}

                            <div className="mx-auto mb-4 inline-flex rounded-full border border-white/80 px-3 py-1 text-xs text-white">
                                {product.code}
                            </div>

                            <h3 className="text-2xl font-medium text-white">
                                {product.name}
                            </h3>

                            <div className="relative mx-auto mt-10 h-[220px] w-full overflow-visible">
                                {/* Preview Image */}
                                <Image
                                    src={`${BASE_PATH}/First.png`}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 80vw, 350px"
                                    className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                                />

                                {/* Hover Video */}
                                <video
                                    className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.play();
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.pause();
                                        e.currentTarget.currentTime = 0;
                                    }}
                                >
                                    <source src={`${BASE_PATH}/3d.webm`} type="video/webm" />
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
                                className="mt-8 rounded-full bg-[#052b4f] px-7 py-3 text-base font-medium text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#052b4f]"
                            >
                                Shop Now
                                <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
    →
  </span>
                            </button>

                            <p className="mt-8 text-xs tracking-wide text-white/60">
                                Starting at ${product.price}.99 per month
                            </p>

                            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}