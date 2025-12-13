"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: 1,
    title: "Anfrage",
    description: "Schreibt mir über das Kontaktformular oder Instagram. Erzählt mir von euch und euren Wünschen.",
    bgColor: "bg-warm-accent/20",
    numberPosition: "left-[40%] lg:left-[30%]",
    number: "0001",
  },
  {
    id: 2,
    title: "Kennenlernen",
    description: "Wir lernen uns per Videocall oder bei einem Kaffee kennen. Ich möchte euch und eure Geschichte verstehen.",
    bgColor: "bg-warm-accent/30",
    numberPosition: "left-[52%] lg:left-[42%]",
    number: "0002",
  },
  {
    id: 3,
    title: "Das Shooting",
    description: "Entspannt und ohne Zeitdruck. Wir nehmen uns Zeit für eure Verbindung und besondere Momente.",
    bgColor: "bg-warm-accent/40",
    numberPosition: "left-[62%] lg:left-[58%]",
    number: "0003",
  },
  {
    id: 4,
    title: "Eure Bilder",
    description: "Innerhalb von 1-2 Wochen erhaltet ihr eure professionell bearbeiteten Bilder in einer schönen Online-Galerie zum Download.",
    bgColor: "bg-warm-accent/50",
    numberPosition: "left-[75%] lg:left-[72%]",
    number: "0004",
  },
];

const Process3 = () => {
  return (
    <section
      className="bg-white py-20 md:py-32"
      style={
        {
          "--font-mono": "ui-monospace, monospace"
        }
      }>
      <div className="container-custom">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl px-2 text-center">
            <p className="text-sm uppercase tracking-wider text-warm-accent font-medium mb-4">
              So läuft euer Shooting ab
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-anthracite">
              Von der ersten Nachricht bis zu euren Bildern
            </h1>
          </div>
        </div>
        <div className="mt-20">
          {processSteps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              key={step.id}
              className="relative w-full mb-8 md:mb-12 last:mb-0"
            >
              <div
                className={cn("absolute left-1/2 w-screen -translate-x-1/2 h-full", step.bgColor)}
              ></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-6 lg:gap-12 w-full px-6 md:px-8 py-8 md:py-10">
                {/* Linke Spalte: Überschrift */}
                <div className="lg:flex lg:items-start">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-anthracite leading-tight">
                    {step.title}
                  </h3>
                </div>
                {/* Rechte Spalte: Fließtext - beginnt immer an derselben vertikalen Linie */}
                {step.description && (
                  <div className="lg:flex lg:items-start">
                    <p className="text-base md:text-lg lg:text-xl text-anthracite/80 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Process3 };
