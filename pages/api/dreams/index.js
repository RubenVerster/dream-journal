import { dreams } from '../../../db.json';

export default function handler(req, res) {
  res.status(200).json(dreams);
}
