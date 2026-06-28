"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useSoundContext } from "@/components/providers/SoundProvider";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/** Contact form with validation and animated feedback */
export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const { playClick, playSuccess, playHover } = useSoundContext();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    // Simulate API call — replace with your backend or Formspree
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStatus("success");
    playSuccess();
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="// Communication Channel" title="Contact" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, label: "Email", value: SITE.email },
              { icon: MapPin, label: "Location", value: "India" },
              { icon: Phone, label: "Status", value: "Open to Opportunities" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover:shadow-glow transition-shadow">
                  <CardContent className="flex items-center gap-4 p-4">
                    <item.icon className="w-5 h-5 text-cyan-glow" />
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">{item.label}</p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="scan-line" />
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => updateField("name", v)}
                      error={errors.name}
                      onHover={playHover}
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => updateField("email", v)}
                      error={errors.email}
                      onHover={playHover}
                    />
                  </div>
                  <Field
                    label="Subject"
                    value={form.subject}
                    onChange={(v) => updateField("subject", v)}
                    error={errors.subject}
                    onHover={playHover}
                  />
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-wider uppercase">
                      Message
                    </label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      onMouseEnter={playHover}
                      placeholder="Tell me about your project..."
                      rows={5}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs text-accent-red mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    disabled={loading}
                    onMouseEnter={playHover}
                    className="w-full sm:w-auto"
                  >
                    {loading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-void/30 border-t-void rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Status notifications */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <p className="text-sm text-green-400">
                        Message transmitted successfully. I&apos;ll respond soon!
                      </p>
                    </motion.div>
                  )}
                  {status === "error" && Object.keys(errors).length > 0 && (
                    <motion.div
                      className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-accent-red/10 border border-accent-red/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <AlertCircle className="w-4 h-4 text-accent-red" />
                      <p className="text-sm text-accent-red">
                        Please fix the errors above.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  onHover,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  onHover?: () => void;
}) {
  return (
    <div>
      <label className="block text-xs font-mono text-muted-foreground mb-2 tracking-wider uppercase">
        {label}
      </label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onMouseEnter={onHover}
        aria-invalid={!!error}
      />
      {error && <p className="text-xs text-accent-red mt-1">{error}</p>}
    </div>
  );
}
