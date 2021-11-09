import {skill} from "../../data/skill";


export default function handler(req, res){
    res.status(200).json(skill)
}