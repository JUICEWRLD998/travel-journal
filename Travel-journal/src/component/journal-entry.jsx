/**
 * JournalEntry Component
 * 
 * Renders a single travel journal entry with:
 * - Animated image carousel (5 stacked images with CSS slide animation)
 * - Location badge and Google Maps link
 * - Title, date, and description
 * 
 * Props:
 * @param {string[]} images - Array of image URLs to display in carousel
 * @param {string} location - Location name (e.g., "📍Japan")
 * @param {string} title - Entry title (e.g., "Exploring Japan")
 * @param {string} date - Travel dates
 * @param {string|JSX} description - Entry description (can be string or JSX with formatting)
 * @param {string} mapLink - Google Maps URL for the location
 * 
 * Styling: Uses .journal-entry class from index.css
 * - Responsive layout: side-by-side on desktop, stacked on mobile
 * - Images animate via CSS @keyframes slide (18s cycle)
 */

export default function JournalEntry(props) {
    // Destructure props with default values for backwards compatibility
    const {
        images = ['/japan/japan.png', '/japan/Tokyo.jpg', '/japan/temples.jpg', '/japan/samurai.jpg', '/japan/sushi.jpg'],
        location = '📍Japan',
        title = 'Exploring Japan',
        date = '12 Jan, 2024 - 24 Jan, 2024',
        description = (
            <>
                <strong>Japan</strong> is an amazing country with a rich culture and history. From the bustling streets of Tokyo to the serene temples of Kyoto, every moment was unforgettable. The food was delicious, and the people were incredibly kind. I can't wait to visit again!
            </>
        ),
        mapLink = 'https://www.google.com/maps/place/Tokyo,+Japan'
    } = props || {}

    return (
        <article className="journal-entry">
            {/* Image carousel: multiple images stacked and animated via CSS */}
            <div className="media" aria-label="Location image carousel">
                {/* Map over images array and render each image */}
                {Array.isArray(images) && images.map((src, i) => (
                    <img 
                        key={i} 
                        src={src} 
                        alt={`${location} - slide ${i + 1}`} 
                    />
                ))}
            </div>

            {/* Entry metadata and content */}
            <div className="meta">
                {/* Top row: location badge and map link */}
                <div className="meta-row">
                    <span className="location">{location}</span>
                    <a 
                        className="map-link" 
                        href={mapLink} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        View on Google Maps
                    </a>
                </div>
                
                {/* Entry title */}
                <h2 className="title">{title}</h2>
                
                {/* Travel dates (wrapped in strong for emphasis) */}
                <p className="date"><strong>{date}</strong></p>
                
                {/* Entry description (can contain JSX formatting) */}
                <p className="description">{description}</p>
            </div>
        </article>
    );
}