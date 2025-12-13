/**
 * Google Reviews API Endpoint
 * 
 * Optional: Falls Google Places API konfiguriert ist, können hier die Bewertungen abgerufen werden.
 * 
 * Benötigte Environment Variables (optional):
 * - GOOGLE_PLACES_API_KEY: API-Key für Google Places API
 * - GOOGLE_PLACE_ID: Die Place ID des Google My Business Profils
 * 
 * Falls keine API-Konfiguration vorhanden ist, werden Fallback-Werte zurückgegeben.
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

  // Falls keine API-Konfiguration vorhanden ist, Fallback-Werte zurückgeben
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return res.status(200).json({
      rating: 5.0,
      totalReviews: 4,
      source: 'fallback',
    });
  }

  try {
    // Google Places API Details Endpoint
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return res.status(200).json({
        rating: data.result.rating || 5.0,
        totalReviews: data.result.user_ratings_total || 4,
        source: 'google_places_api',
      });
    } else {
      // Fallback bei API-Fehler
      return res.status(200).json({
        rating: 5.0,
        totalReviews: 4,
        source: 'fallback',
        error: data.status,
      });
    }
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    // Fallback bei Fehler
    return res.status(200).json({
      rating: 5.0,
      totalReviews: 4,
      source: 'fallback',
      error: error.message,
    });
  }
}

