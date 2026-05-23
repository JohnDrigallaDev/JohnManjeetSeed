"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function MicrobiomeSection() {
    return (
        <section className="bg-[#f6faff] px-6 py-28 text-[#052b4f] md:py-36">
            <div className="mx-auto grid max-w-[1500px] items-center gap-16 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="md:pl-28"
                >
                    <div className="mb-28 flex items-center gap-3 text-lg font-medium">
                        <span>JOHN</span>
                        <span className="text-[#0047ff]">【▱】</span>
                    </div>

                    <h2 className="max-w-[650px] text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-6xl">
                        You are more than human.
                    </h2>

                    <p className="mt-8 max-w-[590px] text-base font-medium leading-6 text-[#052b4f]/85 md:text-lg">
                        Your body isn&apos;t yours alone—it&apos;s home to 38 trillion
                        microbes that power your digestion, immunity and more. Take a few
                        minutes to learn how their health impacts your health—and how to
                        maximize both.
                    </p>

                    <button className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#052b4f] py-2 pl-7 pr-2 text-base font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#0047ff]">
                        Discover
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
              <Play size={15} fill="white" />
            </span>
                    </button>

                    <div className="mt-40 text-base font-semibold uppercase tracking-wide text-[#052b4f]">
                        Science <span className="mx-2">/</span>
                        <span className="normal-case tracking-normal">Microbiome 101</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex min-h-[580px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#eef6ff]"
                >
                    {/* Später hier dein transparentes Blender/Video/Image einsetzen */}
                    <div className="absolute inset-8 rounded-[2rem] border border-dashed border-[#0047ff]/30" />

                    <motion.div
                        animate={{ y: [0, -14, 0], opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-[420px] w-[320px] rounded-full bg-gradient-to-b from-[#dcecff] via-[#9dccff]/50 to-transparent blur-sm"
                    />

                    <div className="absolute text-center text-sm font-medium uppercase tracking-[0.2em] text-[#0047ff]/60">
                        Animation Placeholder
                    </div>
                </motion.div>
            </div>
        </section>
    );
}