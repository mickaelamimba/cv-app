import {quality} from "../../data/quality";


export default function handler(req, res) {
  res.status(200).json(quality)
}
