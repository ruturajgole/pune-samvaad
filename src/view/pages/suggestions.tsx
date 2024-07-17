import { useState } from "react";

interface Props {
  text: string;
}

export const Suggestions = ({text}: Props) => {
  const [rating, setRating] = useState(5);

  return <div style={styles.container}>
      <label htmlFor={"suggestionBox"}>{text}</label>
      <textarea style={styles.textarea} id="suggestionBox" />
      <div style={styles.stars}>
        {Array.from({length: 5}, (_, index) =>
          <Star
            rate={() => setRating(index + (rating === (index + 1) ? 0 : 1))}
            rated={index < rating} />)}
      </div>
      <span>{rating}/5</span>
      <span>Please provide us with a rating</span>
      <button style={styles.submit}>Submit</button>
    </div>
}

const Star = ({rate, rated = false}: Record<string, any>) =>
  <svg onClick={rate} style={styles.star} width="190" height="180" xmlns = "http://www.w3.org/2000/svg">
    <polygon points="100,10 40,180 190,60 10,60 160,180" stroke={rated ? "none" : "black"} fill={rated ? "gold" : "white"}/>
  </svg>


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "x-large",
  },
  textarea: {
    width: "50vw",
    height: "20vh",
    fontSize: "large",
    padding: "1%"
  },
  stars: {
    display: "flex",
    flexDirection: "row"
  },
  star: {
    scale: "0.7",
    cursor: "pointer"
  },
  submit: {
    border: "none",
    marginTop: "2%",
    fontSize: "x-large",
    padding: "1%",
    color: "white",
    backgroundColor: "#e0452c",
    cursor: "pointer"
  }
} as Record<string, React.CSSProperties>;