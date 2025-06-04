import eventCardImage from "../assets/images/event-card.png";

    export default function EventCard() {
        return (
            <div>
                <img src={eventCardImage} alt="Event Card" />
                <h1>Bestseller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
                <h2>Saturday, March 18, 9.30pm</h2>
                <h3>Onnline Event - Attend anywhere</h3>
            </div>
        )
    }
