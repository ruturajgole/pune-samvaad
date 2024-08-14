export interface Event {
  Title: string;
  Guest: string;
  Venue: string;
  Date: string;
  Video?: string;
  photo?: Photo;
  Summary?: string;
  banner?: string;
  Time: string;
  Map?: string;
}

interface Photo {
  readonly thumbnailLink: string;
  readonly webViewLink: string;
  readonly webContentLink: string;
  readonly id: string;
}
