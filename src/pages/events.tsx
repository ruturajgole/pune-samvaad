import { Event } from "../services/models/event"

interface Props {
  events: ReadonlyArray<Event>;
}

export const Events = ({events}: Props) =>
  <div style={styles.container}>
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
  </div>;

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