/**
 * Header Component
 * 
 * Displays the site header with a globe icon and title.
 * This component is rendered once at the top of the app.
 * 
 * Styling: Uses .site-header class from index.css
 * - Centered flexbox layout with red background (--accent color)
 * - Responsive sizing via media queries
 */

export default function Header() {
    return (
        <header className="site-header">
            {/* Globe icon from public folder */}
            <img src="/tour-globe.png" alt="Travel globe icon" />
            
            {/* Site title */}
            <h1>My Travel Journal</h1>
        </header>
    );
}