import { Event } from "services/models";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


interface Props {
  readonly pastEvents: ReadonlyArray<Event>;
}

export const PastEvents = ({pastEvents}: Props) =>
  <div style={styles.container}>
    <table style={styles.table}>
      <thead>
        <th>
          <td>Past Events</td>
        </th>
      </thead>
      <thead>
        {Object.keys(pastEvents[0]).map((column) =>
        <th style={styles.tableBorder}>
          <td>{column}</td>
        </th>)}
      </thead>
      <tbody>
        {
          pastEvents.map((event) => 
            <tr style={styles.tableBorder}>
              <td style={styles.tableBorder}>{event.Date}</td>
              <td style={styles.tableBorder}>{event.Guest}</td>
              <td style={styles.tableBorder}>{event.Venue}</td>
              <td style={styles.tableBorder}>{event.Title}</td>
              {event.Video &&
              <td style={styles.tableBorder}>
                <PlayCircleIcon fontSize={"large"} />
              </td>}
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
    fontSize: "x-large",
    flexDirection: "column"
  },
  table: {
    borderCollapse: "collapse",
    width: "90%"
  },
  tableBorder: {
    border: "1px solid black",
  }
} as Record<string, React.CSSProperties>;