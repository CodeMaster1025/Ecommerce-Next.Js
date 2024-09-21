import { useState, useEffect } from 'react';

const UNSPLASH_ACCESS_KEY = 'xpU2hkCNEaEq0rNkYWbwNp4bf6b96kvB3BNm3HHxrJw';

const useImages = (searchTerm: string, count = 4) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${count}`, 
          {
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erro ao buscar imagens: ${response.statusText}`);
        }

        const data = await response.json();
        const imageUrls = data.results.map((result: { urls: { raw: string } }) => result.urls.raw); // Extrai as URLs das imagens
        setImages(imageUrls);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, count]); // Atualiza a busca quando o termo ou quantidade mudar

  return { images, loading, error };
};

export default useImages;
