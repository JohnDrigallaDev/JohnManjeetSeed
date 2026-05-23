export default function Footer() {
    return (
        <footer className="bg-[#071a33] px-6 py-20 text-white">
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
                <div>
                    <div className="text-3xl font-semibold text-[#8ecbff]">BLUE/</div>
                    <p className="mt-5 max-w-xs text-white/60">
                        Premium microbiome care demo store.
                    </p>
                </div>

                {["Products", "Science", "Support"].map((title) => (
                    <div key={title}>
                        <h3 className="mb-5 font-semibold">{title}</h3>
                        <div className="space-y-3 text-sm text-white/60">
                            <p>Daily Synbiotic</p>
                            <p>Technology</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
}