import { Link } from "wouter";

interface CategoryCubeProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  imageUrl?: string;
  reversed?: boolean;
}

export default function CategoryCube({
  title,
  description,
  icon,
  href,
  color,
  imageUrl,
  reversed = false,
}: CategoryCubeProps) {
  const content = (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reversed ? "md:grid-cols-2" : ""}`}>
      {/* Image/Icon Side */}
      <div className={reversed ? "md:order-2" : ""}>
        <div className={`${color} rounded-2xl aspect-square flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer`}>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="text-7xl group-hover:scale-125 transition-transform duration-300">
              {icon}
            </div>
          )}
        </div>
      </div>

      {/* Text Side */}
      <div className={reversed ? "md:order-1" : ""}>
        <h3 className="text-4xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={href}>
          <button className={`${color} text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}>
            Scopri di più →
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="py-16 md:py-24">
      {content}
    </div>
  );
}
