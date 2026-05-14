import { useState, useEffect, useCallback } from 'react';

export function useAgreements(options = {}) {
  const category = options?.category;

  const [agreements, setAgreements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAgreements = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const baseUrl = 'https://api-korekenke.web.app/agreements';

      const url = category ? `${baseUrl}?category=${category}` : baseUrl;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.statusText}`);
      }

      const data = await response.json();
      setAgreements(data);
    } catch (err) {
      console.error("Error fetching agreements:", err);
      setError(err.message || 'Error desconocido al cargar convenios');
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchAgreements();
  }, [fetchAgreements]);

  return {
    agreements,
    loading,
    error,
    refetch: fetchAgreements
  };
}