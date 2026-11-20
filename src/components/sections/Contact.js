"use client";

import { useRef, useState } from "react";
import {Mail, Copy, Check, ExternalLink, Send,} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import styles from "./Contact.module.css";

const contactInfo = {
  email: "axelgutierrezruano20@gmail.com",
  linkedin: "https://www.linkedin.com/in/axel-gutiérrez",
  github: "https://github.com/AxelGGtz20",
};

export default function Contact() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (isSubmitting) return;

    if (!captchaToken) {
      setSubmitStatus("captcha");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Access Key not configured");
      }

      const formData = new FormData(form);

      const data = {
        ...Object.fromEntries(formData),
        access_key: accessKey,
        "h-captcha-response": captchaToken,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("Invalid API response");
      }

      if (!response.ok || result?.success !== true) {
        console.error("Web3Forms API status:", response.status);
        throw new Error("Form submission failed");
      }

      setSubmitStatus("success");
      form.reset();

    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    }
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>

        <header className={styles.header}>
          <h2 className={styles.title}>
            {isEnglish ? "Let's connect!" : "Conectemos!"}
          </h2>
        </header>

        <div className={styles.contactGrid}>
          <article className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Mail />
            </div>

            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactDescription}>
              {isEnglish
                ? "Get in touch by email."
                : "Comunícate conmigo por correo."}
            </p>

            <div className={styles.contactActions}>
              <button type="button" className={styles.actionButton} onClick={handleCopyEmail} aria-label={isEnglish ? "Copy email" : "Copiar correo"}>
                {copied ? <Check /> : <Copy />}

                {copied
                  ? isEnglish
                    ? "Copied!"
                    : "¡Copiado!"
                  : isEnglish
                    ? "Copy email"
                    : "Copiar correo"}
              </button>

              <a href={`mailto:${contactInfo.email}`} className={styles.actionButton}>
                {isEnglish ? "Send email" : "Enviar correo"}
                <ExternalLink />
              </a>
            </div>
          </article>

          <article className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </div>

            <h3 className={styles.contactTitle}>LinkedIn</h3>
            <p className={styles.contactDescription}>
              {isEnglish
                ? "Connect with me professionally."
                : "Conectemos profesionalmente."}
            </p>

            <div className={styles.contactActions}>
              <a href={contactInfo.linkedin} className={styles.actionButton} target="_blank" rel="noopener noreferrer">
                {isEnglish ? "Visit profile" : "Visitar perfil"}
                <ExternalLink />
              </a>
            </div>
          </article>

          <article className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </div>

            <h3 className={styles.contactTitle}>GitHub</h3>
            <p className={styles.contactDescription}>
              {isEnglish
                ? "Explore my projects and repositories."
                : "Explora mis proyectos y repositorios."}
            </p>

            <div className={styles.contactActions}>
              <a href={contactInfo.github} className={styles.actionButton} target="_blank" rel="noopener noreferrer">
                {isEnglish ? "View projects" : "Ver proyectos"}
                <ExternalLink />
              </a>
            </div>
          </article>
        </div>

        {/*Formulario de contacto*/}
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <header className={styles.formHeader}>
              <h3 className={styles.formTitle}>
                {isEnglish
                  ? "Send me a message"
                  : "Envíame un mensaje"}
              </h3>

              <p className={styles.formDescription}>
                {isEnglish
                  ? "Have an opportunity or proposal? Feel free to contact me."
                  : "¿Tienes alguna oportunidad o propuesta? No dudes en escribirme."}
              </p>
            </header>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact-name"> {isEnglish ? "Name" : "Nombre"}</label>
                <input className={styles.input} id="contact-name" name="name" type="text" maxLength={100} required/>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact-email"> {isEnglish ? "Email address" : "Correo electrónico"}</label>
                <input className={styles.input} id="contact-email" name="email" type="email" maxLength={254} required/>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact-subject"> {isEnglish ? "Subject" : "Asunto"}</label>
                <input className={styles.input} id="contact-subject" name="subject" type="text" maxLength={150} required/>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact-message"> {isEnglish ? "Message" : "Mensaje"}</label>
                <textarea className={styles.textarea} id="contact-message" name="message" rows="5" maxLength={2000} required/>
              </div>

              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={(token) => {
                  setCaptchaToken(token);
                  setSubmitStatus("idle");
                }}
                onExpire={() => setCaptchaToken("")}
                languageOverride={isEnglish ? "en" : "es"}
              />

              <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? isEnglish
                    ? "Sending..."
                    : "Enviando..."
                  : isEnglish
                    ? "Send message"
                    : "Enviar mensaje"}
                <Send />
              </button>

              {submitStatus === "captcha" && (
                <p className={styles.formError} role="alert">
                  {isEnglish
                    ? "Please complete the CAPTCHA verification before sending."
                    : "Por favor, completa la verificación CAPTCHA antes de enviar el mensaje."}
                </p>
              )}

              {submitStatus === "success" && (
                <p className={styles.formSuccess} role="status" aria-live="polite">
                  {isEnglish
                    ? "Your message has been sent successfully. Thank you for contacting me!"
                    : "¡Tu mensaje se ha enviado correctamente! Gracias por contactarme."}
                </p>
              )}

              {submitStatus === "error" && (
                <p className={styles.formError} role="alert">
                  {isEnglish
                    ? "Something went wrong while sending your message. Please try again."
                    : "Ocurrió un problema al enviar tu mensaje. Inténtalo nuevamente."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}