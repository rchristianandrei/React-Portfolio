import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { SendEmail } from "@/services/emailjsService";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) return;

    e.preventDefault();
    setLoading(true);

    try {
      await SendEmail({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      toast.success("Email Sent", { position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 lg:h-screen lg:flex lg:items-center lg:justify-between"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Me
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="grid  grid-cols-1 text-center gap-2 lg:space-y-6">
            <Card>
              <CardContent className="text-sm lg:text-base lg:p-6 flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  rchristianandrei@gmail.com
                </span>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-sm lg:text-base lg:p-6 flex items-center gap-4">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  github.com/rchristianandrei
                </span>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-sm lg:text-base lg:p-6 flex items-center gap-4">
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  linkedin.com/in/reyes-andrei
                </span>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="h-full ">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col h-full space-y-6"
              >
                <div className="flex-1 space-y-6 flex flex-col">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex-1">
                    <Textarea
                      className="h-full resize-none"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {!loading && "Send Message"}
                  {loading && <Spinner />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
