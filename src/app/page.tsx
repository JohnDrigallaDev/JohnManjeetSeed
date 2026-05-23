"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import TechnologySection from "../components/TechnologySection";
import BundleSection from "../components/BundleSection";
import CapsuleTechSection from "../components/CapsuleTechSection";
import MicrobiomeSection from "../components/MicrobiomeSection";

export type CartItem = {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    qty: number;
};

export default function Home() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Omit<CartItem, "qty">) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }

            return [...prev, { ...product, qty: 1 }];
        });

        setCartOpen(true);
    };

    const updateQty = (id: string, qty: number) => {
        if (qty <= 0) {
            setCart((prev) => prev.filter((item) => item.id !== id));
            return;
        }

        setCart((prev) =>
            prev.map((item) => (item.id === id ? { ...item, qty } : item))
        );
    };

    return (
        <main className="min-h-screen bg-[#f6faff] text-[#071a33]">
            <Header cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} onCartClick={() => setCartOpen(true)} />
            <Hero />
            <ProductCards onAddToCart={addToCart} />
            <BundleSection />
            <CapsuleTechSection />
            <MicrobiomeSection />
            <TechnologySection />
            <Footer />

            <CartDrawer
                open={cartOpen}
                cart={cart}
                onClose={() => setCartOpen(false)}
                onUpdateQty={updateQty}
            />
        </main>
    );
}