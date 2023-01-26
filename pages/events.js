import { useRouter } from "next/router";
import { useState } from "react";

export default function Events({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchSportsEvents = async () => {
        const res = await fetch('http://localhost:4000/events?category=sports');
        const data = await res.json();
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List of events</h1>
            {
                events.map(event => {
                    return (
                        <div key={event.id} style={{ backgroundColor: "rgba(12, 131, 229, 0.47)" }}>
                            <h3>
                                {event.id} {event.title} {event.date} | {event.category}
                            </h3>
                            <p>{event.description}</p>
                            <hr />
                        </div>
                    )
                })
            }

        </>
    )
}

export async function getServerSideProps(context) {
    try {
        const { query } = context
        const { category } = query
        const queryString = category ? 'category=sports' : '';
        const res = await fetch(`http://localhost:4000/events?${queryString}`);
        const data = await res.json();
        return {
            props: {
                eventList: data,
            }
        }
    } catch (error) {
        console.log("some error", error);
    }
}
