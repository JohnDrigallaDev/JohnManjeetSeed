export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-[#f6faff] px-6 py-20 text-[#071a33]">
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-2xl shadow-blue-500/10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#0047ff]">
                    Demo Checkout
                </p>

                <h1 className="text-5xl font-semibold tracking-[-0.04em]">
                    Checkout Preview
                </h1>

                <p className="mt-5 text-[#071a33]/65">
                    This is a private demo checkout. No order will be placed and no payment
                    will be processed.
                </p>

                <form className="mt-10 grid gap-4">
                    <input className="rounded-2xl border border-blue-100 bg-[#f6faff] px-5 py-4 outline-none" placeholder="Email" />
                    <input className="rounded-2xl border border-blue-100 bg-[#f6faff] px-5 py-4 outline-none" placeholder="Full name" />
                    <input className="rounded-2xl border border-blue-100 bg-[#f6faff] px-5 py-4 outline-none" placeholder="Address" />
                    <input className="rounded-2xl border border-blue-100 bg-[#f6faff] px-5 py-4 outline-none" placeholder="City" />

                    <button
                        type="button"
                        className="mt-4 rounded-full bg-[#0047ff] py-4 font-semibold text-white"
                    >
                        Complete demo order
                    </button>
                </form>
            </div>
        </main>
    );
}