// Homepage placeholder 
import { fetchTrendingAnime } from '../../lib/animeAPI';
import AnimeCard from '../../components/AnimeCard';

export default async function HomePage() {
  const trendingAnime = await fetchTrendingAnime();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Trending Anime</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {trendingAnime.data.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}