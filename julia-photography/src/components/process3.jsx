"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-anthracite">
              So läuft euer Shooting ab
            </h1>
            <p className="text-anthracite/70 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Von der ersten Nachricht bis zu euren fertigen Bildern – ich begleite euch durch den gesamten Prozess.
            </p>
          </div>
        </div>
        <ul className="mt-20">
          {processSteps.map((step, index) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              key={step.id}
              className="relative flex w-full min-h-[120px] md:min-h-[140px] lg:min-h-[160px] items-center">
              <div
                className={cn("absolute left-1/2 w-screen -translate-x-1/2 h-full", step.bgColor)}></div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 w-full px-6 md:px-8 py-6 md:py-8">
                <div className="flex items-center gap-3 lg:min-w-[280px] lg:pt-1">
                  <ArrowDown className="size-8 md:size-10 lg:size-12 text-anthracite flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-anthracite">
                    {step.title}
                  </h3>
                </div>
                {step.description && (
                  <p className="text-base md:text-lg lg:text-xl text-anthracite/90 max-w-2xl leading-relaxed font-medium lg:pt-1">
                    {step.description}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Process3 };
