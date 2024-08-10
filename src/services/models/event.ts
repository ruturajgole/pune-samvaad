export interface Event {
  Title: string;
  Guest: string;
  Venue: string;
  Date: string;
  Video?: string;
  photo?: Photo;
}

interface Photo {
  readonly thumbnailLink: string;
  readonly id: string;
}