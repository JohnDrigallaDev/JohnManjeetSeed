"use client";

import { CartItem } from "../app/page";
import { X } from "lucide-react";
import Link from "next/link";

type CartDrawerProps = {
    open: boolean;
    cart: CartItem[];
    onClose: () => void;
    onUpdateQty: (id: string, qty: number) => void;
};

export default function CartDrawer({
                                       open,
                                       cart,
                                       onClose,
                                       onUpdateQty,
                                   }: CartDrawerProps) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 z-[90] bg-black/30 backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed right-0 top-0 z-[100] h-full w-full max-w-md transform bg-white p-6 shadow-2xl transition duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Your Cart</h2>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>

                {cart.length === 0 ? (
                    <p className="text-[#071a33]/60">Your cart is empty.</p>
                ) : (
                    <div className="space-y-5">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-3xl border border-blue-100 bg-[#f6faff] p-4"
                            >
                                <div className="flex justify-between gap-4">
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-[#071a33]/60">{item.subtitle}</p>
                                        <p className="mt-3 font-semibold">€{item.price}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => onUpdateQty(item.id, item.qty - 1)}
                                            className="h-8 w-8 rounded-full bg-white"
                                        >
                                            -
                                        </button>
                                        <span>{item.qty}</span>
                                        <button
                                            onClick={() => onUpdateQty(item.id, item.qty + 1)}
                                            className="h-8 w-8 rounded-full bg-white"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="border-t pt-5">
                            <div className="flex justify-between text-xl font-semibold">
                                <span>Total</span>
                                <span>€{total}</span>
                            </div>

                            <Link
                                href="/checkout"
                                className="mt-6 block w-full rounded-full bg-[#0047ff] py-4 text-center font-semibold text-white"
                            >
                                Continue to checkout
                            </Link>

                            <p className="mt-4 text-center text-xs text-[#071a33]/50">
                                Demo only. No real payment.
                            </p>
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
}