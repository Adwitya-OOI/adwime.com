// AnimeCard placeholder 
import Image from 'next/image';
import Link from 'next/link';

export default function AnimeCard({ anime }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
      <Image
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        width={300}
        height={450}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-white truncate">{anime.title}</h2>
        <p className="text-sm text-mutedText truncate">{anime.synopsis}</p>
        <Link href={`/anime/${anime.mal_id}`}>
          <a className="text-primary font-medium mt-2 block">Details</a>
        </Link>
      </div>
    </div>
  );
}