"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden bg-background relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 border-b border-secondary/20 pb-8"
      >
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tighter text-center">
          Contact <span className="text-secondary">Me</span>
        </h2>
        <p className="font-code-sm text-code-sm text-outline mt-2 text-center uppercase tracking-widest"></p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-12"
        >
          <header>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-headline-xl text-headline-xl md:text-[5rem] text-on-surface leading-[1.1] mb-8 font-bold tracking-tight"
            >
              Let&apos;s build the <span className="text-secondary drop-shadow-[0_0_15px_rgba(65,228,192,0.3)]">future</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-body-lg font-body-lg text-on-primary-container/80 w-full leading-relaxed"
            >
              Currently architecting high-performance systems for the digital void. Open for collaborations, technical consulting, and innovative product development.
            </motion.p>
          </header>

          <div className="space-y-8">
            {[
              { icon: "alternate_email", label: "Email", value: "samirbaishnab26@gmail.com", href: "mailto:samirbaishnab26@gmail.com" },
              { icon: "call", label: "Phone", value: "+8801733121094" },
              { icon: "location_on", label: "Stationed In", value: "Dhaka, Bangladesh" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-cyan-500/30 bg-primary-container glass-card transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_rgba(65,228,192,0.2)]">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-primary-container uppercase tracking-widest mb-1">{item.label}</p>
                  {item.href ? (
                    <a className="text-body-lg font-body-lg text-on-surface hover:text-secondary transition-colors" href={item.href}>{item.value}</a>
                  ) : (
                    <p className="text-body-lg font-body-lg text-on-surface">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <div className="glass-card p-8 md:p-12 border border-outline-variant/30 relative overflow-hidden group/card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[120px] pointer-events-none transition-all duration-700 group-hover/card:bg-secondary/10"></div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                <div className="w-3 h-3 rounded-full bg-secondary-container/40"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
              </div>
              <span className="font-code-sm text-code-sm text-outline">Submit Your Info.</span>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">Name</label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant/30 px-6 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">Email Address</label>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant/30 px-6 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">Message</label>
                <textarea
                  className="w-full bg-surface-container-low border border-outline-variant/30 px-6 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-md resize-none placeholder-on-primary-container/70 text-on-surface"
                  placeholder="Type your message..."
                  rows={6}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-transparent border border-secondary text-secondary font-headline-md text-headline-md uppercase tracking-widest hover:bg-secondary/5 hover:shadow-[0_0_20px_rgba(65,228,192,0.2)] transition-all flex justify-center items-center gap-4 group"
                type="submit"
              >
                <span>Send Message</span>
                <motion.span
                  className="material-symbols-outlined"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  send
                </motion.span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
