import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const TechBadge = ({
  tech,
  className,
}: {
  tech: string;
  className: string;
}) => {
  return (
    <Card className={cn("text-center p-0", className)}>
      <CardContent className="px-3 text-sm font-medium">{tech}</CardContent>
    </Card>
  );
};
