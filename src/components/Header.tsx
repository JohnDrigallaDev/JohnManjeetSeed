"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type HeaderProps = {
    cartCount: number;
    onCartClick: () => void;
};

const shopProducts = [
    "Daily Synbiotic",
    "Daily Multivitamin",
    "Daily Essentials Duo",
    "Energy + Focus",
    "Sleep + Restore",
    "Pediatric Daily Synbiotic",
    "Vaginal Synbiotic",
];

const scienceItems = [
    ["Approach", "Microbiome science for human health."],
    ["Seed [Labs]", "Frontier microbial science."],
    ["Scientists", "Leading microbiome experts."],
    ["Sustainability", "Human impact on planetary health."],
];

const learnTop = [
    ["Microbiome 101", "The hidden ecosystem powering your health."],
    ["Probiotics 101", "How these mighty bacteria shape your health."],
];

const articles = [
    ["How Seed Is Setting A New Standard For Probiotic Health", "7 min read"],
    ["Seeking Carbon-Capturing Bacteria off a Remote Japanese Island", "8 min read"],
    ["Exploring the Microbiomes of Your Body", "12 min read"],
];

export default function Header({
                                   cartCount,
                                   onCartClick,
                               }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [dropdown, setDropdown] = useState<
        "shop" | "science" | "learn" | null
    >(null);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full px-4 pt-3 md:px-10">
                <div className="mx-auto flex max-w-[1500px] items-center justify-between">
                    {/* LEFT */}
                    <div
                        className={`hidden items-center gap-8 transition-all duration-500 md:flex ${
                            scrolled
                                ?  "rounded-full border border-white/20 bg-[#aab7c1]/30 px-8 py-2 shadow-xl backdrop-blur-2xl"
                                : ""
                        }`}
                    >
                        <a
                            href="/"
                            className="text-2xl font-medium tracking-[-0.04em] text-white"
                        >
                            JOHN
                            <span className="ml-1 inline-block h-3 w-3 rounded-full bg-[#006dff]" />
                        </a>

                        <nav
                            onMouseLeave={() => setDropdown(null)}
                            className="flex items-center gap-8 text-[15px] font-medium text-white"
                        >
                            <button
                                onMouseEnter={() => setDropdown("shop")}
                                className={`rounded-full px-5 py-2 transition-all duration-300 ${
                                    dropdown === "shop"
                                        ? "bg-white/20 backdrop-blur-xl"
                                        : ""
                                }`}
                            >
                                Shop
                            </button>

                            <button
                                onMouseEnter={() => setDropdown("science")}
                                className={`rounded-full px-5 py-2 transition-all duration-300 ${
                                    dropdown === "science"
                                        ? "bg-white/20 backdrop-blur-xl"
                                        : ""
                                }`}
                            >
                                Science
                            </button>

                            <button
                                onMouseEnter={() => setDropdown("learn")}
                                className={`rounded-full px-5 py-2 transition-all duration-300 ${
                                    dropdown === "learn"
                                        ? "bg-white/20 backdrop-blur-xl"
                                        : ""
                                }`}
                            >
                                Learn
                            </button>
                        </nav>
                    </div>

                    {/* RIGHT */}
                    <div
                        className={`hidden items-center gap-4 transition-all duration-500 md:flex ${
                            scrolled
                                ? "rounded-full border border-white/20 bg-[#aab7c1]/30 px-4 py-2 shadow-xl backdrop-blur-2xl"
                                : ""
                        }`}
                    >
                        <button className="text-[15px] font-medium text-white">
                            Sign in
                        </button>

                        <button
                            onClick={onCartClick}
                            className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#052b4f]"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* MOBILE */}
                    <div className="flex w-full items-center justify-between md:hidden">
                        <a
                            href="/"
                            className="text-2xl font-medium tracking-[-0.04em] text-white"
                        >
                            JOHN
                            <span className="ml-1 inline-block h-3 w-3 rounded-full bg-[#006dff]" />
                        </a>

                        <div className="flex items-center gap-4">
                            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#052b4f]">
                                Get Started
                            </button>

                            <button
                                onClick={() => setMobileOpen(true)}
                                className="text-white"
                            >
                                <Menu size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* DESKTOP DROPDOWN */}
            {dropdown && (
                <div
                    onMouseEnter={() => setDropdown(dropdown)}
                    onMouseLeave={() => setDropdown(null)}
                    className="fixed left-[15%] top-[76px] z-40 hidden w-[410px] rounded-[2rem] border border-white/10 bg-[#7f9099]/45 p-6 text-white shadow-2xl backdrop-blur-3xl md:block"
                >
                    {dropdown === "shop" && <ShopDropdown />}
                    {dropdown === "science" && <ScienceDropdown />}
                    {dropdown === "learn" && <LearnDropdown />}
                </div>
            )}

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[100] bg-transparent p-2 md:hidden">
                    <div className="mb-2 flex items-center justify-between rounded-full border border-white/10 bg-[#8fa0a8]/35 px-5 py-3 text-white backdrop-blur-3xl">
                        <div className="flex items-center gap-4 text-sm">
              <span className="rounded-full bg-white/15 px-5 py-2">
                Shop
              </span>

                            <span>Science</span>

                            <span>Learn</span>

                            <span>Sign in</span>
                        </div>

                        <button onClick={() => setMobileOpen(false)}>
                            <X />
                        </button>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-[#7f9099]/45 p-6 text-white backdrop-blur-3xl">
                        <ShopDropdown />
                    </div>
                </div>
            )}
        </>
    );
}

function ProductThumb({ index }: { index: number }) {
    return (
        <div className="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-2xl bg-white/10">
            <div
                className={`h-10 w-7 rounded-md ${
                    index % 2 === 0
                        ? "bg-gradient-to-b from-[#0047ff] to-[#9dccff]"
                        : "bg-gradient-to-b from-[#052b4f] to-[#8ecbff]"
                }`}
            />
        </div>
    );
}

function ShopDropdown() {
    return (
        <>
            <div className="space-y-5">
                {shopProducts.map((product, i) => (
                    <div key={product} className="flex items-center gap-5">
                        <ProductThumb index={i} />

                        <div>
                            <p className="text-sm text-white/60">
                                {i === 0
                                    ? "DS-01®"
                                    : i === 1
                                        ? "DM-02™"
                                        : i === 2
                                            ? "Save 25%"
                                            : i === 3
                                                ? "AM-02™"
                                                : i === 4
                                                    ? "PM-02™"
                                                    : i === 5
                                                        ? "PDS-08®"
                                                        : "VS-01™"}
                            </p>

                            <p className="text-lg font-semibold">{product}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-right">
        <span className="border-b border-white pb-1 font-semibold">
          Shop All Products →
        </span>
            </div>
        </>
    );
}

function ScienceDropdown() {
    return (
        <>
            <div className="space-y-6">
                {scienceItems.map(([title, text], i) => (
                    <div key={title} className="flex items-center gap-5">
                        <ProductThumb index={i} />

                        <div>
                            <p className="text-lg font-semibold">{title}</p>

                            <p className="text-base leading-6 text-white/65">
                                {text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-wide text-white/80">
                Reference
            </p>

            <div className="mt-5 space-y-3 text-lg text-white">
                {shopProducts.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
        </>
    );
}

function LearnDropdown() {
    return (
        <>
            <div className="space-y-6">
                {learnTop.map(([title, text], i) => (
                    <div key={title} className="flex items-center gap-5">
                        <ProductThumb index={i} />

                        <div>
                            <p className="text-lg font-semibold">{title}</p>

                            <p className="text-base leading-6 text-white/65">
                                {text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-wide text-white/80">
                Featured Articles
            </p>

            <div className="mt-6 space-y-6">
                {articles.map(([title, read], i) => (
                    <div key={title} className="flex items-center gap-5">
                        <ProductThumb index={i + 2} />

                        <div>
                            <p className="text-lg font-semibold leading-6">
                                {title}
                            </p>

                            <p className="mt-1 text-base text-white/65">
                                {read}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-left">
        <span className="border-b border-white pb-1 font-semibold">
          All Cultured Articles →
        </span>
            </div>
        </>
    );
}