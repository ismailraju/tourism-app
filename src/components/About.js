
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <>

            <h2>Who are we?</h2>
            <p>
                That feels like an existential question, don't you
                think?
            </p>

            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}