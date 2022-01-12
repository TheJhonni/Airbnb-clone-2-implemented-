import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function search() {
  return (
    <div className="h-screen">
      <Header />
      <main className="flex">
        <section>
          <p className="text-sm">get 300 + Stays for 5 Number of Guests </p>
          <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in Saturn</h1>
          <div className="hidden">
            <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95">
              Cancellation Flexibility
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
