import type { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  withArrow?: boolean;
}

export default function Button({
  variant = "primary",
  withArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 min-h-[44px]";
  const variants = {
    primary: "bg-accent text-white shadow-card hover:bg-ink hover:shadow-card-hover",
    secondary: "border border-line text-ink bg-transparent hover:border-ink hover:bg-ink/[0.03]",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
        >
          <path
            d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
