export interface Photo {
  readonly webContentLink: string;
  readonly thumbnailLink: string;
  readonly name: string;
  readonly id: string;
  readonly hasThumbnail: boolean;
}

export interface Folder {
  readonly photos: ReadonlyArray<Photo>;
  readonly videos: ReadonlyArray<Photo>;
  readonly name: string;
}