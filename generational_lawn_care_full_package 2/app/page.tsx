
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-xl font-semibold">Generational Lawn Care</h1>
        <a href="tel:YOURNUMBER" className="font-medium">Get a Quote</a>
      </header>
      <section className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Premium Lawn Care, Built to Last Generations</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">Family-owned lawn fertilization and weed control services proudly serving Toronto and the GTA.</p>
        <a href="tel:YOURNUMBER" className="inline-block px-8 py-4 bg-black text-white rounded-xl">Request a Free Estimate</a>
      </section>
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Generational Lawn Care
      </footer>
    </main>
  );
}
