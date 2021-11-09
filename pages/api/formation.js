import {formation} from "../../data/formation";


export default function handler(req, res) {
  res.status(200).json(formation)
}
