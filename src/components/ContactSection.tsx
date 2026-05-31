"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

// ─── Replace this with your deployed Google Apps Script Web App URL ───────────
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUeE2E-SfSArwXPA8fsy6HgGlgS7DFCUu0tcQRzhDjSGsl08phMX8ML_pE_9nj4Mig/exec";
// ─────────────────────────────────────────────────────────────────────────────

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = async (data: FormValues) => {
    setSubmitStatus("idle");
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        // no-cors because Apps Script returns an opaque response
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || "",
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });
      // no-cors yields an opaque response (status 0), treat it as success
      // If Apps Script throws, the fetch itself rejects — caught below
      void res;
      setSubmitStatus("success");
      reset();
    } catch (err) {
      console.error("Contact form submission error:", err);
      setSubmitStatus("error");
    }
  };

  const contactItems = [
    { icon: "alternate_email", label: t("contact.email"), value: "samirbaishnab26@gmail.com", href: "mailto:samirbaishnab26@gmail.com" },
    { icon: "call", label: t("contact.phone"), value: "+8801733121094" },
    { icon: "location_on", label: t("contact.stationedIn"), value: t("contact.location") },
  ];

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
          {t("contact.contact")}<span className="text-secondary">{t("contact.me")}</span>
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
              className="font-headline-xl text-headline-xl md:text-display-xl text-on-surface leading-headline-xl mb-8 font-bold tracking-tight"
            >
              {t("contact.letsBuildThe")}<span className="text-secondary drop-shadow-[0_0_15px_rgba(65,228,192,0.3)]">{t("contact.future")}</span>{t("contact.dot")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-body-lg font-body-lg text-on-primary-container/80 w-full leading-relaxed"
            >
              {t("contact.contactDesc")}
            </motion.p>
          </header>

          <div className="space-y-8">
            {contactItems.map((item, index) => (
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
              <span className="font-code-sm text-code-sm text-outline">{t("contact.submitInfo")}</span>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Name */}
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.nameLabel")} <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name", {
                    required: t("contact.validation.nameRequired"),
                    minLength: { value: 2, message: t("contact.validation.nameTooShort") },
                  })}
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className={`w-full bg-surface-container-low border px-6 py-4 focus:outline-none focus:ring-1 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-outline-variant/30 focus:border-secondary focus:ring-secondary/30"
                  }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs font-medium pt-1">
                    <AlertCircle size={13} /> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.emailLabel")} <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email", {
                    required: t("contact.validation.emailRequired"),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("contact.validation.emailInvalid"),
                    },
                  })}
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className={`w-full bg-surface-container-low border px-6 py-4 focus:outline-none focus:ring-1 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-outline-variant/30 focus:border-secondary focus:ring-secondary/30"
                  }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs font-medium pt-1">
                    <AlertCircle size={13} /> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject (optional) */}
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.subjectLabel")}{" "}
                  <span className="text-outline text-xs normal-case tracking-normal">({t("contact.optional")})</span>
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder={t("contact.subjectPlaceholder")}
                  className="w-full bg-surface-container-low border border-outline-variant/30 px-6 py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-label-md text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.messageLabel")} <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: t("contact.validation.messageRequired"),
                    minLength: { value: 10, message: t("contact.validation.messageTooShort") },
                  })}
                  rows={6}
                  placeholder={t("contact.messagePlaceholder")}
                  className={`w-full bg-surface-container-low border px-6 py-4 focus:outline-none focus:ring-1 transition-all font-body-md resize-none placeholder-on-primary-container/70 text-on-surface ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-outline-variant/30 focus:border-secondary focus:ring-secondary/30"
                  }`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-red-400 text-xs font-medium pt-1">
                    <AlertCircle size={13} /> {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-transparent border border-secondary text-secondary font-headline-md text-headline-md uppercase tracking-widest hover:bg-secondary/5 hover:shadow-[0_0_20px_rgba(65,228,192,0.2)] transition-all flex justify-center items-center gap-4 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span>{t("contact.sending")}</span>
                    <Loader2 className="animate-spin text-secondary" size={20} />
                  </>
                ) : (
                  <>
                    <span>{t("contact.sendMessage")}</span>
                    <motion.span
                      className="material-symbols-outlined"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      send
                    </motion.span>
                  </>
                )}
              </motion.button>

              {/* Status Banners */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 border border-secondary/30 bg-secondary/10 text-secondary rounded-lg flex items-center gap-3 font-medium text-sm"
                  >
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">{t("contact.messageSuccess")}</p>
                      <p className="text-xs text-on-surface-variant">{t("contact.messageSuccessDesc")}</p>
                    </div>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 border border-red-500/30 bg-red-500/10 text-red-500 rounded-lg flex items-center gap-3 font-medium text-sm"
                  >
                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                    <div>
                      <p className="font-bold text-white">{t("contact.submissionFailed")}</p>
                      <p className="text-xs text-red-400">{t("contact.submissionFailedDesc")}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
