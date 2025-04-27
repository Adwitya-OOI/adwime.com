// Anime detail page placeholder 
import { fetchAnimeDetails } from '../../../lib/animeAPI';

export default async function AnimeDetailPage({ params }) {
  const { id } = params;
  const anime = await fetchAnimeDetails(id);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">{anime.title}</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="md:w-2/3 space-y-4">
          <p>
            <strong>Synopsis:</strong> {anime.synopsis}
          </p>
          <p>
            <strong>Episodes:</strong> {anime.episodes || 'N/A'}
          </p>
          <p>
            <strong>Status:</strong> {anime.status}
          </p>
          <p>
            <strong>Genres:</strong>{' '}
            {anime.genres.map((genre) => genre.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}