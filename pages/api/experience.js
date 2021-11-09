

import {experience} from "../../data/experience";

export default function handler(req, res) {
  res.status(200).json(experience)
}
