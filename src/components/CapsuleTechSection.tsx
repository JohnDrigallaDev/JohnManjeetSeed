"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CapsuleTechSection() {
    return (
        <section className="relative overflow-hidden bg-[#f6faff] px-0 py-24 md:py-32">
            <div className="absolute inset-0">
                <Image
                    src="/background1.png"
                    alt="Microbiome background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1500px] px-5">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-[#6f8395]/70 p-8 text-white shadow-2xl backdrop-blur-xl md:p-16"
                >
                    <div className="grid min-h-[520px] gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                        <div>
                            <p className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                                ● Viacap® Technology
                            </p>

                            <h2 className="max-w-[650px] text-4xl font-medium leading-[1.08] tracking-[-0.05em] md:text-6xl">
                                Most probiotics don't survive digestion—DS-01® does.
                            </h2>

                            <div className="mt-10 max-w-[520px] rounded-3xl border border-white/35 bg-white/5 p-6 backdrop-blur-md">
                                <div className="flex items-center justify-between gap-8">
                                    <div>
                    <span className="rounded-full border border-white/70 px-3 py-1 text-sm">
                      DS-01®
                    </span>
                                        <p className="mt-4 text-xl leading-7">
                                            Increases <br /> healthy bacteria°
                                        </p>
                                    </div>

                                    <div className="text-4xl font-medium">↑17x</div>
                                </div>
                            </div>

                            <p className="mt-8 text-xs font-semibold text-white/80">
                                °Lactobacillus
                            </p>
                        </div>

                        <div className="relative min-h-[480px]">
                            {/* Hier kommt später dein transparentes Blender WEBM rein */}
                            <div className="absolute left-1/2 top-1/2 h-[420px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-dashed border-white/40 bg-white/5 backdrop-blur-sm" />

                            <div className="absolute left-0 top-20 max-w-[260px]">
                                <h3 className="text-sm font-bold uppercase">Outer Capsule</h3>
                                <p className="mt-2 text-sm leading-5 text-white/80">
                                    Shields probiotics from stomach acid in the digestive tract,
                                    while delivering prebiotics to stimulate the growth of
                                    beneficial bacteria.
                                </p>
                            </div>

                            <div className="absolute right-0 top-[270px] max-w-[260px]">
                                <h3 className="text-sm font-bold uppercase">Inner Capsule</h3>
                                <p className="mt-2 text-sm leading-5 text-white/80">
                                    Delivers 24 live strains of probiotics to the colon, where
                                    they&apos;re needed most.
                                </p>
                            </div>

                            <div className="absolute left-[280px] top-[155px] hidden h-px w-28 border-t border-dashed border-white/60 md:block" />
                            <div className="absolute right-[280px] top-[310px] hidden h-px w-28 border-t border-dashed border-white/60 md:block" />

                            {/* Temporärer visueller Platzhalter */}
                            <motion.div
                                animate={{ y: [0, -16, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-1/2 top-[70px] h-28 w-20 -translate-x-1/2 rounded-t-full rounded-b-2xl bg-gradient-to-b from-[#0047ff] to-[#9dccff] shadow-2xl shadow-blue-900/30"
                            />

                            <motion.div
                                animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                className="absolute left-1/2 top-[225px] h-28 w-64 -translate-x-1/2 rounded-full bg-white/50 blur-3xl"
                            />

                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-[50px] left-1/2 h-52 w-20 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#9dccff] to-[#0047ff] shadow-2xl shadow-blue-900/30"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}