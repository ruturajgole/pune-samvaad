export interface Photo {
  readonly webContentLink: string;
  readonly thumbnailLink: string;
  readonly name: string;
  readonly id: string;
}

export interface Folder {
  readonly photos: ReadonlyArray<Photo>;
  readonly name: string;
}