import { Events, SubPages } from "services/models";
import { Event } from "services/models/event"
import { PastEvents } from "./past";
import { UpcomingEvents } from "./upcoming";

interface Props {
  events: ReadonlyArray<Event>;
  page?: Events;
}

export const EventsView = ({events, page}: Props) =>
  (page === Events.Upcoming && <UpcomingEvents upcomingEvents={events.filter((event) => isUpcoming(event.Date))} />) ||
  (page === Events.Past && <PastEvents pastEvents={events.filter((event) => !isUpcoming(event.Date))} />) ||
  (<div style={styles.container}>
    <table style={styles.table}>
      <thead>
        {Object.keys(events[0]).map((column) =>
        <th style={styles.tableBorder}>
          <td>{column}</td>
        </th>)}
      </thead>
      <tbody>
        {
          events.map((event) => 
            <tr style={styles.tableBorder}>
              <td style={styles.tableBorder}>{event.Date}</td>
              <td style={styles.tableBorder}>{event.Guest}</td>
              <td style={styles.tableBorder}>{event.Venue}</td>
              <td style={styles.tableBorder}>{event.Title}</td>
            </tr>
        )}
      </tbody>
    </table>
  </div>);

const isUpcoming = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date: Date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date >= today;
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "x-large"
  },
  table: {
    borderCollapse: "collapse",
    width: "90%"
  },
  tableBorder: {
    border: "1px solid black",
  }
} as Record<string, React.CSSProperties>;