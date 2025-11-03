export default function JournalEntry(props) {
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
            <div className="media" aria-hidden="false">
                {/* Images stacked and animated by CSS. Render images from props.images */}
                {Array.isArray(images) && images.map((src, i) => (
                    <img key={i} src={src} alt={`slide-${i}`} />
                ))}
            </div>

            <div className="meta">
                <div className="meta-row">
                    <span className="location">{location}</span>
                    <a className="map-link" href={mapLink} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="title">{title}</h2>
                <p className="date"><strong>{date}</strong></p>
                <p className="description">{description}</p>
            </div>

        </article>
    );
}