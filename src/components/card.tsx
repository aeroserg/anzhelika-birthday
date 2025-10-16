export interface ActionCardProps {
  title: string;
  image?: string;
  link?: {
    href: string;
    text: string;
  },
  randomImage?: boolean;
}

export default function ActionCard({
  title,
  image,
  link,
  randomImage,
}: ActionCardProps) {
  const titleLength = title.length;
  if (randomImage) {
    image = `random/${Math.ceil(Math.random() * 28)}.jpg`;
  }
  return (
    <div className="action-card">
      {
        titleLength < 30 ? (<h1>{title}</h1>) : titleLength < 100 ? (<h2>{title}</h2>) : titleLength < 200 ? (<h3>{title}</h3>) : (<p>{title}</p>)
      }
      {
        link && (<a href={link.href}>{link.text}</a>)
      }
      {image && (<img src={image} alt={title} />)}
    </div>

  );
}