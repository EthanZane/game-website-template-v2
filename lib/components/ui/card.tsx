import * as React from "react"
import { cn } from "@/lib/utils"
import { CardData } from "@/lib/types/base"


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CardData[];
}

export function CardList({ data, className, ...props }: CardProps) {
  return (
    <div className={cn("flex flex-col md:flex-row flex-wrap gap-10", className)} {...props}>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-96 rounded-xl border border-border bg-card text-card-foreground shadow transition-all hover:shadow-lg p-6"
        >
          <div className="w-32 h-32 mx-auto mb-6">
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="space-y-1.5 mb-4">
            <h3 className="text-xl text-primary font-semibold">{item.title}</h3>
            <p className="text-secondary-foreground font-medium">{item.character}</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-feature-description">{item.desc}</p>
            <div className="space-y-2">
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-feature-description">
                  <span>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}