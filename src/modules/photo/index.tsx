import client from "client";
import * as model from "./photo.model";
import { PhotoService } from "./photo.service";

export type IPhoto = model.IPhoto;

// Простейший DI
export const photoService = new PhotoService(client);
