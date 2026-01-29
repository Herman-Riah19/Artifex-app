import { Testimonial } from "@/types/testimonialsType";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { Typography } from "@repo/ui/components/ui/typography";
import { Star, Quote } from "lucide-react";

export function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) {
  return (
    <Card
      className={`transition-all duration-500 h-full ${
        isActive
          ? "border-primary bg-primary/5 shadow-xl scale-105"
          : "border-border bg-card opacity-50"
      }`}
    >
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current text-primary" />
          ))}
        </div>

        <Quote className="w-8 h-8 text-primary/20 mb-4" />

        <Typography
          variant="p"
          color="foreground"
          className="text-lg leading-relaxed mb-6 flex-1"
        >
          {testimonial.content}
        </Typography>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <Typography
                variant="h4"
                color="foreground"
                className="font-semibold"
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="p"
                color="muted-foreground"
                className="text-sm"
              >
                {testimonial.role}
              </Typography>
              <Typography
                variant="p"
                color="primary"
                className="text-xs font-medium"
              >
                {testimonial.company}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
