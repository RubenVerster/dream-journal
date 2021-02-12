import { dreams } from '../../../db.json';

export default function handler({ query: { id } }, res) {
  const filtered = dreams.filter((dream) => dream.id == id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `You haven't dreamt of this yet... maybe try sleeping on it :P`,
    });
  }
}
