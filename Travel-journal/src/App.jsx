/**
 * App Component (Main Application Container)
 * 
 * This is the root React component that renders the entire travel journal.
 * It imports the Header component and maps over the entries array from data.js
 * to render a JournalEntry component for each travel destination.
 * 
 * Data Flow:
 * - Imports entries from './data.js' (centralized data source)
 * - Maps each entry to a <JournalEntry /> component
 * - Spreads entry properties as props (...e)
 */

import Header from "./component/header";
import JournalEntry from "./component/journal-entry";
import entries from "./data";  // Import travel entries data

export default function App() {
    return (
        <>
            {/* Site header with logo and title */}
            <Header />
            
            {/* Render all journal entries from data.js */}
            {entries.map((e) => (
                <JournalEntry 
                    key={e.id}      // Unique key for React reconciliation
                    {...e}          // Spread all entry properties as props
                />
            ))}
        </>
    )
}
        
    