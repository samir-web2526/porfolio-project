"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, Layers, Gauge } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ug1beqf5CdcacCZwdUQfuj-EstXhk2gKKvCVbk1QDAhqyUO5LvLoYdLXClDMFH3BC3L4Rkx0wKGZNSPAaFcJXTGNMkwHhh_GoT5zmYy4eWM-e7rQSHzrTMewi7PGJrAvvTxz9gyREQZoGOrywtjEyov0ngjOpRAOPOUpZyIDDWvuE8x1UrLut5Og4waldLzSuTIWc5EnzFhyp6F86u8_lamUmFRy2ZNcKHepiK_aY9d8E4-XgD9bxxmU5ibLkb6boDmtSiJh2Zz5uA",
      offset: 22.6
    },
    {
      name: "CSS",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ugYS6FY1kwoJsG6BAYKrnFyYrWmdu_GgVEsTZPpErQJkpppxC3lU6PIQApwNI31x2Pg-tr4W4GzDL63M-r1eD8JjQ74WEa5S3Z_WUVnoGutMJPFLVmRp-fR5CSxNOJcgAE8OxqEC4tG7_u8wEMDmL_uRCn3u40CmJvyQ_ybIc4W9DxsWuu16aYJD5DXpB0EU-pnSzD65YfRC7NSy5a8eC2OzBgkSofyA3u3X6wzQ7DC6xhYVdSimf3BWjkjrtZPJvbMPVwmDK1ZMA",
      offset: 18.1
    },
    {
      name: "Tailwind CSS",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujEOmDok3C8OHQXuC58BgnLNMD98qnZW2BRmM2UQOTLyBsitizr0FRT2xSzfirnEVd3jGxZnq8QPEZIwLfZF2O4A6WsdUHEHUnK_85kHpZydgjJZv7fk5eWtnrAqec-OnDPOmRjx-iDpLCeRRQ2ge_h9X3isgQtSRdsZmiLzkGWv7t-cNdwUGHhmH7uxY-X4egwS_80M9b0rwM47hV9zkO0VuW3aAUn03Lbwxh8zz4ndtlIvFPCuOBaAOP2q4mfCXWk5FRXMUaV2QU",
      offset: 11.3
    },
    {
      name: "JavaScript",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujk1p43NK_hREPOgqVDEXJsRUnAsAfHQyeJED02siPUgfst_euCXxqmzla422sjXCd8g0ib7FKEKw5880Uev1gO1T0b7SDljq0oqf57W5KzFBGq2p1LqRS6Z50drYp5bMAsMjcj0Je3ZUeiHcFTHepK8tB_KOL2EbiPIAFI3Qqdlk4413k-dfti1r05aaCyW8sL7CebOJKmchOm67WUFdt6hHlMYmf-J4amlJapzRfOsWKYDNZhTy2FYVmxGPGTr-C1c7iozQEXvg",
      offset: 15.8
    },
    {
      name: "TypeScript",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujxzDCWZICirOoAMQzrHexXuU-BEtIXpcdHIbOGLTamUqmVqKMKPCbRSCc3k-W8Awg7StmIQVnUooMaksOnm2giJr1cDf5F3nM2lHbhe8DndJCNaVVa5qlKwrqYzV5MkJyRH52TH2coi5my46E2WfoLLR0nYMaUwcEyD4vQQRqscTuOfcJD3w35AldQG3F9u2z83lJ9DEYBUs2rkJ6HXACTKKjJwuVT0-_xgCiAKp6C0apzq-jzybuZdOnGI-zJhxzEA9kAwwivSN0",
      offset: 20.3
    },
    {
      name: "React",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uj9eXpGtZIWVS8ktqgia24Wm-GiUftkk3qKWEt85L3fSd4O3vQR-pPH1kYGQlyPbcUn9yHsyMoGaqRhn249vL-w_v1UPx-3UWbz8w-YTDCeSYIWoH6lzWD3KQeYyNoVFKav-ev36M2K8ZqiB-qWiwM5sIEIdd09wHpxbXIn0542gNiIEkPUkfUVhfjSTwArnbS1n3_U70r7rksMxUM_ByOobvU0cDv0STv0YZJ-61N8QS3DA2rGG3kQ5hvqZlnc_fUUTc76vQOndjM",
      offset: 9.0
    },
    {
      name: "Next.js",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uiq9lMwNGoFlzcPy4-ONEjHWF1shJDvz4JVCAuMFLH1EWl3X7ES9SL4zkry-NdR4xqWWq0_OL9aW2Mbuctv71smduRklmBiN0NcqxxkqaHME8parv_NxZ8aSRN_VN1F2YHE5mt86Idiw3ST7-gaq8kZjofYgOaPsitgYA-VzD8X5fS7FNKrBEkaMeJZSOFCwy_90wRaODafyvkhAwSunAN2LCIU7dMvwWy4n-LwgHUDKa79LuEZIYbIaDs6DO-c5JLx9goQ0v2IoAI",
      offset: 13.5
    },
    {
      name: "Node.js",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujdPkkIIEwQCCGi9b-6jkRH9kjEk2QsHp8dPsxG52Yq7BZC2p0e6IsORmzbDHC4x334wEuQCmFl2tlJrm7X0S77SFCzAP9FN5KKu5FPM5xJuv4PZ4MV16KgtBYiHfRRCRYdGPIw5iUYABk1nUBNO2WpizwGPhrlXyXheZiv1ffOZ9qT4LV-ZNoZQCwbWTKFXo7Dwl0dflEPpVIvqNPty0eCEjQDgdS0CE_bIRFeASfX2ib2JtVyP-s1et2L3-6wMGkqmeOZj6dA8w",
      offset: 18.1
    },
    {
      name: "Express.js",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ugci7d6M7DXTCeGBd1iGUwA7tH1WdCjicEfNnA3pGp5Sa3kYC-vasuLccYsfN1ebshKxhB4GWzeLR84RNsWIeEIZ-g6-WEbfuHGaffaNUJm50elB5KKKLGiQLCUHz7vkNi65LO7Aax-Nl81Px7NWqfpdAjUiwBTs2lIBUE3Om4i99kvwkqVQ2tkYo0E9v1LvEfSvcJdpuexVFRfddkoPD94xqVU9_UlK6ynChqc_NJqv7DjCHBKZC3BvHdlWsnByYwdX5rF0gETCQ",
      offset: 22.6
    },
    {
      name: "MongoDB",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uigneEbm6wnw2iAZrNDFuLHlTFQ2gBXLz77hdMP4s5QVApYufqAWwhPeZVdwB0ed7uGzQ-jGAQ5H3xvFPJlO_Sf2nJAp1B40pnSSWM3KNfH5LE_XWsjdS-UE5eiRgBjTZikcU4kiv6GrOYB06J94qyrU18MEOi0wup5iDc72K-PgmutG19NVR-bG_fqC9ECVIp95dcKXuyHIF9LW9Au8P0_DhFnmk8x8z6K7vr-ZzSgxcYphbhwrS7KCMO7ErT13rlUR9J3INYm2W0",
      offset: 15.8
    },
    {
      name: "Prisma",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ugC-lykm0yLjlqjlCNJk4MTXGfjU-OR62j3wbXkoaLFXOBLhlOKz2GGRikOdr-6_-2P4WGHjGp71CIILpq7cYPqj2y1dcJT8OMgzQXPrC0gIGwq7CldeXJ5cb-qqgp7d-LmBfnK8hQ4gV_91YLT86X7w5nkKNTL6l3odSLZn7CR6ki9O8rdEakgppbJlTCL9h1YPPGiv_C1WNaOOLfkgmrfhwOZJ64_bE3JkkOaRzH2AM-8L_yMsfjRBr22yLkXclq1gN7PWFV1BUA",
      offset: 20.3
    },
    {
      name: "PostgreSQL",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uhm3vNKRJWywo_0OCRP9OgmafoK0jhnMC4N6CtSiGX6HhmudSMJ323uBwleiQu1WsVhq-TV2c9BXNW5E3JMRsEZr-PY4UYWA1pjfrTEUlcW7UoZ9HNIVhZasURtD1l8lBYsz89cS2JmmlVfMQBldLDjS8WXLu5zg4JY4OWPHZBmhEwwAgtlbqyE1ZvVFFhDQBqnmTgkJYPQ4mGPD-Cv51zO-Y0TUo-rRMaQgLIuLjGZxp9YPF88Ei2PWXTBZxYTXehS2vPqNIfPFg",
      offset: 11.3
    },
    {
      name: "Docker",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujy_hC8ut6-9uMZQbXK1gJK8oYqGB9mZtha-smwwfl0Tz_RJ9wTVDZc0GOSWJ5tZChF_4dnSPbn6wnIbrr_ihBGOzeSskyKZsS3l-i2nvZ7AVhw4YauMfa5RAXVRtbGoxHMhsFWkDYJNyKDWSa8AbyjwIpd-3088mSkD4YgKaCe-s9Ai8pMRs7BaTLtAi7CyfmDlUsHAvNV0ene1lNyl4Cb15vJn2dm4OVNXGwuzRXyFVnl6sNQcKX87FxmYhYcnCulT2gNiLtM_Ks",
      offset: 24.8
    },
    {
      name: "Go",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uguLDHF99nVCwHidOPyNeDwGQl7AxBKSrXI6TM0PlPGzpq45WqfKPbN5o5lGXT6EVt5QV9Ugz7dJjpPy5kBfH4tecH8ClqQMYAIstpOLjjKiv-4spn3KrLKGEsRQK7qwBg-czPO1jFb0puct1Ot6e_bYxJBDwDdNlx5FhXPd6-7XUt3fNwr-30p1UofGzWw0nRx89N9fTlWDxOrghCi8HZE0PelyOcVO8_LQGDFGYfcJzsPUK8yzQVnWaTwljtiOl7-ekt9E4rKUqw",
      offset: 33.9
    }
  ];

  return (
    <section className="pt-32 pb-24 overflow-x-hidden relative z-10">
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
        {/* Hero Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">
            System Capabilities
          </span>
          <h2 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 font-bold">
            Core Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-transparent"></div>
        </motion.header>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 mb-32">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="glass-card p-6 rounded-lg border border-outline-variant/30 flex flex-col items-center justify-center gap-4 hover:border-secondary/50 transition-all group glow-cyan"
            >
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeWidth="4"></circle>
                  <circle className="text-secondary" cx="40" cy="40" fill="transparent" r="36" stroke="currentColor" strokeDasharray="226.2" strokeDashoffset={skill.offset} strokeWidth="4"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center p-5 bg-transparent">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <span className="font-label-md text-on-surface-variant group-hover:text-secondary transition-colors font-medium text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Engineering Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full order-2 lg:order-1">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-12"
            >
              <span className="font-label-md text-sm text-secondary uppercase tracking-[0.2em] mb-4 block">
                Manifesto
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface font-bold">
                Engineering Philosophy
              </h2>
            </motion.header>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: "100% Code Quality",
                  desc: "Adhering to strict linting, comprehensive testing, and peer-reviewed standards to ensure production-ready code every single time.",
                  icon: <BadgeCheck className="w-6 h-6" />
                },
                {
                  title: "Modern Architecture",
                  desc: "Leveraging microservices, serverless functions, and modular design patterns to build resilient and adaptable digital infrastructures.",
                  icon: <Layers className="w-6 h-6" />
                },
                {
                  title: "Scalable Systems",
                  desc: "Engineered for growth. Optimizing every layer from the database to the CDN to handle high-concurrency demands with ease.",
                  icon: <Gauge className="w-6 h-6" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-secondary/30 transition-all"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-[1.125rem] md:text-[1.25rem] text-on-surface mb-1 md:mb-2 font-bold">{item.title}</h3>
                    <p className="text-on-surface-variant text-base leading-relaxed font-body-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-outline-variant/30 glow-cyan aspect-[4/3] lg:aspect-auto">
              <div className="relative w-full h-full lg:h-[600px]">
                <Image
                  alt="Server Infrastructure"
                  className="rounded-xl object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvrEqhRecoQgI4XOkLuXU-Wc3pbVyx8_QahtDuDzdwcn6H9ZDwwiILf8v_y7voxVhL14zt_md1acC9coFS3E64xDEqtZBEfa4iQuOfx3yF9ex5bP4rtQcnJ_dCLOf3LpReDcYp5X9psx8bGEsySdtHKUoF8sCYLd_rfzfU9uuwz-J7Un-djnrJsFxJjq40xOTckgmWIYz_uanIYJleohp-GauB6qK8eOwrvIp34pXU_XyiAJNhX_3_zswm_H7ulLxNMeYdwxVrB-N9"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10"></div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
