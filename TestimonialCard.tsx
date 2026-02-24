import Image from "next/image";

type Variant = "purple" | "gray" | "white";

interface TestimonialCardProps {
  name: string;
  role?: string;
  imageSrc: string;
  quote: string;
  testimonial: string;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, { card: string; imageBorder: string }> = {
  purple: {
    card: "bg-purple-600 text-white",
    imageBorder: "border-white/30",
  },
  gray: {
    card: "bg-gray-800 text-white",
    imageBorder: "border-white/30",
  },
  white: {
    card: "bg-white text-gray-500",
    imageBorder: "border-gray-300",
  },
};

export default function TestimonialCard({
  name,
  role = "Verified Graduate",
  imageSrc,
  quote,
  testimonial,
  variant = "white",
  className = "",
}: TestimonialCardProps) {
  const styles = variantStyles[variant];

  return (
    <article className={`${styles.card} p-6 rounded-xl space-y-4 ${className}`}>
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={name}
          width={40}
          height={40}
          className={`rounded-full border-2 ${styles.imageBorder}`}
        />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-sm opacity-70">{role}</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold leading-snug">{quote}</h2>
      <p className="text-sm opacity-70">{testimonial}</p>
    </article>
  );
}
