import { useLayoutEffect, useState } from "react";

export interface ActionCardProps {
  title: {
    __html: string | TrustedHTML;
  };
  image?: string;
  link?: {
    href: string;
    text: string;
  };
  randomImage?: boolean;
}

export default function ActionCard({
  title,
  image,
  link,
  randomImage,
}: ActionCardProps) {
  const [imageSrc, setImageSrc] = useState(image);
  useLayoutEffect(() => {
    return () => {
      if (randomImage) {
        setImageSrc(`random/${Math.ceil(Math.random() * 28)}.jpg`);
      }

    };
  }, [randomImage]);
  const titleLength = title.__html.toString().length;
  return (
    <div className="action-card">
      {titleLength < 30 ? (
        <h1 dangerouslySetInnerHTML={title}></h1>
      ) : titleLength < 100 ? (
        <h2 dangerouslySetInnerHTML={title}></h2>
      ) : titleLength < 200 ? (
        <h3 dangerouslySetInnerHTML={title}></h3>
      ) : (
        <div dangerouslySetInnerHTML={title}></div>
      )}
      {link && <a href={link.href}>{link.text}</a>}
      {randomImage && (
        <button
          onClick={() =>
            setImageSrc(`random/${Math.ceil(Math.random() * 28)}.jpg`)
          }
        >
          Обновить
        </button>
      )}
      {imageSrc && <img src={imageSrc} alt={title.__html.toString()} />}
    </div>
  );
}
