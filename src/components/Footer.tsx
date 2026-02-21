import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/80 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-1">
        {/* Copyright */}
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Andrei Reyes. All rights reserved.
        </span>

        {/* Social Links */}
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:rchristianandrei@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/rchristianandrei" target="_blank">
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/reyes-andrei/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};
