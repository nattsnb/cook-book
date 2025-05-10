interface ButtonLikeImageLinkProps {
  alt: string;
  href: string;
  src: string;
  categoryId?: number;
  className?: string;
}

export const ButtonLikeImageLink = ({
  alt,
  href,
  src,
  className,
}: ButtonLikeImageLinkProps) => (
  <a href={href}>
    <img alt={alt} src={src} className={className} />
  </a>
);
