import { IClient } from "client";
import { IPhoto } from "./photo.model";

interface ILatestPhotos {
  latest_photos: {
    id: number;
    img_src: string;
  }[];
}

export class PhotoService {
  client: IClient;

  constructor(client: IClient) {
    this.client = client;
    this.getLatest = this.getLatest.bind(this);
  }

  async getLatest() {
    try {
      const searchParams = new URLSearchParams({
        page: "1",
      });

      return await this.client
        .get<ILatestPhotos>(
          `rovers/curiosity/latest_photos?${searchParams.toString()}`
        )
        .then((data) =>
          data.latest_photos.map(
            (item) => ({ id: item.id, src: item.img_src } as IPhoto)
          )
        );
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
