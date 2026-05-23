"use client";

import { motion } from "framer-motion";

export default function TechnologySection() {
    return (
        <section className="relative overflow-hidden bg-[#eef6ff] px-6 py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#8ecbff,transparent_28%),radial-gradient(circle_at_15%_70%,#dcecff,transparent_32%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-40">
                {Array.from({ length: 55 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-[#0047ff]/25 blur-[1px]"
                        style={{
                            left: `${(i * 37) % 100}%`,
                            top: `${(i * 61) % 100}%`,
                        }}
                        animate={{
                            y: [0, -28, 0],
                            x: [0, 10, 0],
                            opacity: [0.15, 0.65, 0.15],
                        }}
                        transition={{
                            duration: 4 + (i % 5),
                            repeat: Infinity,
                            delay: (i % 8) * 0.2,
                        }}
                    />
                ))}
            </div>

            <div className="relative mx-auto max-w-7xl rounded-[3rem] border border-white/70 bg-[#071a33]/10 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl md:p-14">
                <div className="grid gap-12 md:grid-cols-[1fr_420px] md:items-center">
                    <div>
                        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#0047ff]">
                            Capsule Technology
                        </p>

                        <h2 className="max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.05em] text-white md:text-7xl">
                            Designed to survive digestion.
                        </h2>

                        <div className="mt-12 space-y-10">
                            <TechItem
                                title="Outer capsule — for protection"
                                text="A blue protective shell helps shield the formula through the first stage of digestion."
                            />

                            <TechItem
                                title="Inner capsule — for delivery"
                                text="A second inner layer is designed to release the active blend where it matters most."
                            />
                        </div>
                    </div>

                    <div className="relative flex min-h-[560px] items-center justify-center">
                        <motion.div
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-12 h-48 w-40 rounded-t-full rounded-b-[2rem] bg-gradient-to-b from-[#0047ff] to-[#8ecbff] shadow-2xl shadow-blue-700/30"
                        />

                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-[250px] h-28 w-56 rounded-[50%] bg-[#8ecbff]/40 blur-2xl"
                        />

                        <div className="absolute top-[250px] h-40 w-64 rounded-[45%] bg-gradient-to-br from-[#cfe6ff] to-[#0047ff]/30 blur-sm" />

                        <motion.div
                            animate={{ y: [0, 14, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-10 h-72 w-40 rounded-full bg-gradient-to-b from-[#8ecbff] to-[#0047ff] shadow-2xl shadow-blue-700/30"
                        />

                        <div className="absolute top-[190px] h-36 w-20 rounded-full bg-white/80 blur-[1px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TechItem({ title, text }: { title: string; text: string }) {
    return (
        <div>
            <div className="mb-5 h-px w-full bg-white/70" />
            <h3 className="text-lg font-semibold uppercase tracking-wide text-white">
                {title}
            </h3>
            <p className="mt-4 max-w-lg text-lg leading-8 text-white/80">{text}</p>
        </div>
    );
}