"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

// ─── Replace this with your deployed Google Apps Script Web App URL ───────────
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxUeE2E-SfSArwXPA8fsy6HgGlgS7DFCUu0tcQRzhDjSGsl08phMX8ML_pE_9nj4Mig/exec";
// ─────────────────────────────────────────────────────────────────────────────

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
      void res;
      setSubmitStatus("success");
      reset();
    } catch (err) {
      console.error("Contact form submission error:", err);
      setSubmitStatus("error");
    }
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: t("contact.email"),
      value: "samirbaishnab26@gmail.com",
      href: "mailto:samirbaishnab26@gmail.com",
    },
    { icon: <Phone size={20} />, label: t("contact.phone"), value: "+8801733121094" },
    {
      icon: <MapPin size={20} />,
      label: t("contact.stationedIn"),
      value: t("contact.location"),
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden bg-background relative z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
        >
          <span className="h-px w-6 sm:w-8 bg-secondary" />
          <span className="text-secondary font-label-md uppercase tracking-[0.3em] text-[10px] sm:text-xs">
            {t("about.intro")}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-headline-lg text-4xl sm:text-5xl md:text-6xl text-white font-bold text-center"
        >
          {t("contact.contact")}{" "}
          <span className="text-secondary">{t("contact.me")}</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-8 sm:space-y-10 md:space-y-12"
        >
          <header>
            <motion.h6
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-headline text-headline-sm sm:text-headline-md md:text-headline-lg text-on-surface leading-headline-sm sm:leading-headline-md mb-6 sm:mb-8 font-semibold tracking-tight"
            >
              {t("contact.letsBuildThe")}
              <span className="text-secondary drop-shadow-[0_0_15px_rgba(65,228,192,0.3)]">
                {t("contact.future")}
              </span>
              {t("contact.dot")}
            </motion.h6>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-body-md sm:text-body-lg font-body-md sm:font-body-lg text-on-primary-container/80 w-full leading-relaxed"
            >
              {t("contact.contactDesc")}
            </motion.p>
          </header>

          <div className="space-y-6 sm:space-y-8">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-cyan-500/30 bg-primary-container glass-card transition-all duration-300 group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_rgba(65,228,192,0.2)] shrink-0 text-secondary">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-label-md text-[10px] sm:text-label-md text-on-primary-container uppercase tracking-widest mb-0.5 sm:mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      className="text-body-sm sm:text-body-md md:text-body-lg font-body-sm sm:font-body-md md:font-body-lg text-on-surface hover:text-secondary transition-colors break-all sm:break-normal"
                      href={item.href}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-body-sm sm:text-body-md md:text-body-lg font-body-sm sm:font-body-md md:font-body-lg text-on-surface">
                      {item.value}
                    </p>
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
          <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 border border-outline-variant/30 relative overflow-hidden group/card">
            <div className="absolute top-0 right-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-secondary/5 blur-[120px] pointer-events-none transition-all duration-700 group-hover/card:bg-secondary/10"></div>
            <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="font-code-sm text-sm sm:text-base md:text-lg text-outline">
                {t("contact.submitInfo")}
              </span>
            </div>

            <form
              className="space-y-5 sm:space-y-6 md:space-y-8"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Name */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="font-label-md text-[10px] sm:text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.nameLabel")}{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name", {
                    required: t("contact.validation.nameRequired"),
                    minLength: {
                      value: 2,
                      message: t("contact.validation.nameTooShort"),
                    },
                  })}
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className={`w-full bg-surface-container-low border px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 focus:outline-none focus:ring-1 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface text-sm sm:text-base ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-outline-variant/30 focus:border-secondary focus:ring-secondary/30"
                  }`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-red-400 text-[10px] sm:text-xs font-medium pt-1">
                    <AlertCircle size={12} className="shrink-0" />{" "}
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="font-label-md text-[10px] sm:text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.emailLabel")}{" "}
                  <span className="text-red-400">*</span>
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
                  className={`w-full bg-surface-container-low border px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 focus:outline-none focus:ring-1 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface text-sm sm:text-base ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-outline-variant/30 focus:border-secondary focus:ring-secondary/30"
                  }`}
                />
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-red-400 text-[10px] sm:text-xs font-medium pt-1">
                    <AlertCircle size={12} className="shrink-0" />{" "}
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject (optional) */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="font-label-md text-[10px] sm:text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.subjectLabel")}{" "}
                  <span className="text-outline text-[10px] sm:text-xs normal-case tracking-normal">
                    ({t("contact.optional")})
                  </span>
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  placeholder={t("contact.subjectPlaceholder")}
                  className="w-full bg-surface-container-low border border-outline-variant/30 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all font-body-md placeholder-on-primary-container/70 text-on-surface text-sm sm:text-base"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="font-label-md text-[10px] sm:text-label-md uppercase tracking-widest text-on-surface block">
                  {t("contact.messageLabel")}{" "}
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: t("contact.validation.messageRequired"),
                    minLength: {
                      value: 10,
                      message: t("contact.validation.messageTooShort"),
                    },
                  })}
                  rows={5}
                  placeholder={t("contact.messagePlaceholder")}
                  className={`w-full bg-surface-container-low border px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 focus:outline-none focus:ring-1 transition-all font-body-md resize-none placeholder-on-primary-container/70 text-on-surface text-sm sm:text-base ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                      : "border-outline-variant/30 focus:border-secondary focus:ring-secondary/30"
                  }`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-red-400 text-[10px] sm:text-xs font-medium pt-1">
                    <AlertCircle size={12} className="shrink-0" />{" "}
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 bg-transparent border border-secondary text-secondary font-headline-md text-body-lg sm:text-headline-md uppercase tracking-widest hover:bg-secondary/5 hover:shadow-[0_0_20px_rgba(65,228,192,0.2)] transition-all flex justify-center items-center gap-3 sm:gap-4 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span>{t("contact.sending")}</span>
                    <Loader2
                      className="animate-spin text-secondary"
                      size={18}
                    />
                  </>
                ) : (
                  <>
                    <span>{t("contact.sendMessage")}</span>
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
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
                    className="mt-4 p-3 sm:p-4 border border-secondary/30 bg-secondary/10 text-secondary rounded-lg flex items-center gap-2 sm:gap-3 font-medium text-xs sm:text-sm"
                  >
                    <CheckCircle2
                      className="text-secondary shrink-0"
                      size={18}
                    />
                    <div>
                      <p className="font-bold text-white text-sm sm:text-base">
                        {t("contact.messageSuccess")}
                      </p>
                      <p className="text-[10px] sm:text-xs text-on-surface-variant">
                        {t("contact.messageSuccessDesc")}
                      </p>
                    </div>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 sm:p-4 border border-red-500/30 bg-red-500/10 text-red-500 rounded-lg flex items-center gap-2 sm:gap-3 font-medium text-xs sm:text-sm"
                  >
                    <AlertCircle className="text-red-500 shrink-0" size={18} />
                    <div>
                      <p className="font-bold text-white text-sm sm:text-base">
                        {t("contact.submissionFailed")}
                      </p>
                      <p className="text-[10px] sm:text-xs text-red-400">
                        {t("contact.submissionFailedDesc")}
                      </p>
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
