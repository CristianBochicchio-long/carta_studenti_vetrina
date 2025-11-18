import { Card } from "@/components/ui/card";

interface ShopCardProps {
  name: string;
  description?: string;
  image?: string;
  discount?: string;
}

export default function ShopCard({
  name,
  description,
  image,
  discount,
}: ShopCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {image ? (
        <div className="relative h-40 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discount}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-4xl">🏪</div>
          {discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discount}
            </div>
          )}
        </div>
      )}
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-foreground">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground flex-1">{description}</p>
        )}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs font-semibold text-primary">Convezione Attiva</p>
        </div>
      </div>
    </Card>
  );
}
