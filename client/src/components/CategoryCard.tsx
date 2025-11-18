import { Card } from "@/components/ui/card";
import { Link } from "wouter";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export default function CategoryCard({
  title,
  description,
  icon,
  href,
  color,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className={`h-full cursor-pointer group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 ${color}`}>
        <div className="p-8 flex flex-col items-center justify-center text-center h-full min-h-64">
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </Card>
    </Link>
  );
}
