import axios from "axios";
import { serverLink } from "./RouteConfig";

export const client = axios.create({
  baseURL: serverLink,
});
