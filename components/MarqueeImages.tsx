import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    title: "Academias",
    img: "/Marquee/academia.png",
  },
  {
    title: "Cafeterias",
    img: "/Marquee/cafeteria.png",
  },
  {
    title: "Cinemas e Teatros",
    img: "/Marquee/cinema.png",
  },
  {
    title: "Hotéis e Pousadas",
    img: "/Marquee/hotel.png",
  },
  {
    title: "Lojas Virtuais",
    img: "/Marquee/lojav.png",
  },
  {
    title: "Parques de Diversões",
    img: "/Marquee/parque.png",
  },
  {
    title: "Restaurantes",
    img: "/Marquee/restaurante.png",
  },
  {
    title: "Salões de Beleza",
    img: "/Marquee/salao.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  title,
}: {
  img: string;
  title: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl p-2",
      )}
    >
      <div className="relative hover:scale-105 transition-transform duration-300 my-10">
        <img className="rounded-lg" alt="Review" src={img} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none rounded-xl" />
        <h3 className="absolute bottom-2 left-2 z-10 text-white text-lg">
          {title}
        </h3>
      </div>
    </figure>
  );
};


export default ReviewCard;


export function MarqueeImagens() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee reverse className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-transparent dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-transparent dark:from-background"></div>
    </div>
  );
}
