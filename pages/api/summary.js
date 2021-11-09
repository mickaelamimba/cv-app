import {summary} from "../../data/summary";

export default function handler(req, res) {
    res.status(200).json(summary)
}
