"use client";

import Image from "next/image";
const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "/JohnManjeetSeed"
        : "";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#071a33]">
            <div className="relative min-h-screen overflow-hidden rounded-b-[2rem] md:rounded-b-[2.75rem]">

                {/* Desktop Image */}
                <div className="absolute inset-0 hidden md:block">
                    <Image
                        src={`${BASE_PATH}/hero.png`}
                        alt="Hero"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Mobile Image */}
                <div className="absolute inset-0 md:hidden">
                    <Image
                        src={`${BASE_PATH}/hero_mobile.png`}
                        alt="Hero Mobile"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Nur leichter Verlauf links */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f6faff]/70 via-transparent to-transparent md:from-[#f6faff]/55" />

                <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-start px-5 pt-28 md:items-center md:px-10 md:pt-0">
                    <div className="max-w-[520px] text-[#052b4f]">
                        <h1 className="text-[42px] font-medium leading-[1.03] tracking-[-0.05em] md:text-[66px]">
                            A life-changing health routine, built for your microbiome.
                        </h1>

                        <p className="mt-6 max-w-[460px] text-base font-medium leading-6 text-[#052b4f]/85 md:text-lg">
                            Transform your gut health, energy, sleep, and nutrition with
                            formulations designed for real results.
                        </p>

                        <div className="mt-8 flex items-center gap-5">
                            <button className="rounded-full bg-[#052b4f] px-8 py-4 text-base font-medium text-white md:text-lg">
                                Take the Quiz
                            </button>

                            <button className="border-b border-[#052b4f] pb-1 text-base font-semibold md:text-lg">
                                Shop Now →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}