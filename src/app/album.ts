import { Track } from "./track";

export interface Album {
  name: string;
  releaseDateb: string;
  coverImage: string;
  tracks: Track[];
}
