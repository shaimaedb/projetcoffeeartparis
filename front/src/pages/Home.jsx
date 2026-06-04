import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#f4efe8] min-h-screen text-[#556046]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#f4efe8]/95 backdrop-blur border-b border-[#e5ddd2]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

          <nav className="hidden lg:flex gap-10 text-lg font-medium">
            <a href="#">Café</a>
            <a href="#">Céramique</a>
            <a href="#">Boutique</a>
            <a href="#">Évènements</a>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl font-bold">Coffee Arts</h1>
            <p className="text-xs">Paris</p>
          </div>

          <nav className="hidden lg:flex gap-10 text-lg font-medium">
            <a href="#">Blog</a>
            <a href="#">Engagements</a>
            <a href="#">Contact</a>
            <a href="#">Compte</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#9b9692] min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-[#f6ebdd] text-6xl md:text-8xl font-bold max-w-6xl leading-tight">
          Specialty coffee & pottery studio
        </h1>

        <p className="mt-8 text-2xl text-white">
          Sip, create and connect
        </p>

        <p className="mt-10 max-w-3xl text-xl text-[#f8f1ea]">
          Un lieu hybride où l'on vient savourer un café,
          créer de ses mains et partager un moment simplement.
        </p>

        <p className="mt-6 text-lg text-[#f8f1ea]">
          25 boulevard du Temple, Paris
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-12">
          <button className="bg-[#e6d4c3] px-10 py-4 rounded-2xl font-semibold text-[#556046]">
            Réserver un atelier
          </button>

          <button className="border border-white text-white px-10 py-4 rounded-2xl">
            Découvrir la carte
          </button>
        </div>
      </section>

      {/* GALERIE INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-bold mb-8">
            Au cœur de Coffee Arts Paris
          </h2>

          <p className="text-center text-xl max-w-3xl mx-auto mb-16">
            Des images pour découvrir l'ambiance du lieu,
            ses matières et les instants qui s'y vivent.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              className="h-[450px] w-full object-cover rounded-3xl"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              className="h-[450px] w-full object-cover rounded-3xl"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              className="h-[450px] w-full object-cover rounded-3xl"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
              className="h-[450px] w-full object-cover rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* TROIS EXPERIENCES */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-bold mb-6">
            Trois expériences, un même lieu
          </h2>

          <p className="text-center text-xl mb-16">
            Un café de spécialité, des ateliers créatifs
            et une boutique pensés pour se compléter.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* CAFE */}
            <div className="relative h-[560px] rounded-[30px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-10 left-8">
                <p className="uppercase text-[#d6d1a0] mb-2">
                  Déguster
                </p>

                <h3 className="text-white text-5xl font-bold">
                  Café de spécialité
                </h3>
              </div>
            </div>

            {/* ATELIER */}
            <div className="relative h-[560px] rounded-[30px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-10 left-8">
                <p className="uppercase text-[#d6d1a0] mb-2">
                  Créer
                </p>

                <h3 className="text-white text-5xl font-bold">
                  Ateliers créatifs
                </h3>
              </div>
            </div>

            {/* BOUTIQUE */}
            <div className="relative h-[560px] rounded-[30px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcf93a"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-10 left-8">
                <p className="uppercase text-[#d6d1a0] mb-2">
                  Emporter
                </p>

                <h3 className="text-white text-5xl font-bold">
                  La boutique
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 bg-[#eee6dc]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-6xl font-bold mb-16">
            Instants Coffee Arts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
              className="rounded-3xl h-[400px] w-full object-cover"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              className="rounded-3xl h-[400px] w-full object-cover"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              className="rounded-3xl h-[400px] w-full object-cover"
              alt=""
            />

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#556046] text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-bold mb-4">
            Coffee Arts
          </h3>

          <p>
            Café • Céramique • Boutique
          </p>

          <p className="mt-4 opacity-70">
            © 2026 Tous droits réservés
          </p>

        </div>

      </footer>

      {/* RESEAUX FLOTTANTS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">

        <div className="w-14 h-14 rounded-full bg-[#bcc592] flex items-center justify-center shadow-lg">
          IG
        </div>

        <div className="w-14 h-14 rounded-full bg-[#bcc592] flex items-center justify-center shadow-lg">
          TT
        </div>

        <div className="w-14 h-14 rounded-full bg-[#bcc592] flex items-center justify-center shadow-lg">
          P
        </div>

      </div>

    </div>
  );
}