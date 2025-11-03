import Header from "./component/header";
import JournalEntry from "./component/journal-entry";
import entries from "./data";

export default function App() {
    return (
        <>
            <Header />
            {/* Render all entries from src/data.js */}
            {entries.map((e) => (
                <JournalEntry key={e.id} {...e} />
            ))}
        </>
    )
}
        
    