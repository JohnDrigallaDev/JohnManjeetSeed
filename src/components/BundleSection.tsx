"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BundleSection() {
    return (
        <section className="relative bg-[#f6faff] px-6 py-28 text-[#052b4f] md:py-36">
            <div className="mx-auto grid max-w-[1500px] items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:pl-28"
                >
                    <div className="mb-8 inline-flex rounded-full bg-[#dcebff] px-4 py-2 text-xs font-bold text-[#0047ff]">
                        Bundle + Save 25%
                    </div>

                    <h2 className="max-w-[620px] text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-6xl">
                        Daily essentials for nutrition and digestive health.
                    </h2>

                    <p className="mt-8 max-w-[570px] text-base font-medium leading-6 text-[#052b4f]/80 md:text-lg">
                        Our clinically-studied daily synbiotic paired with a daily
                        multivitamin reduces bloating, promotes healthy regularity and
                        helps cover nutrient gaps.
                    </p>

                    <button className="mt-8 rounded-full bg-[#052b4f] px-7 py-4 text-base font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#0047ff]">
                        Shop Daily Essentials Duo
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="grid gap-4">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-[#eaf4ff]">
                            <Image
                                src={`${BASE_PATH}/bild1.png`}
                                alt="Bundle hero"
                                fill
                                sizes="(max-width: 768px) 100vw, 760px"
                                className="object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {["bild2.png", "bild3.png", "bild4.png"].map((image) => (
                                <div
                                    key={image}
                                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#eaf4ff]"
                                >
                                    <Image
                                        src={`/${image}`}
                                        alt={image}
                                        fill
                                        sizes="(max-width: 768px) 33vw, 250px"
                                        className="object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}