import { dreams } from '../../../db.json';

export default function handler(req, res) {
  const filtered = dreams.filter((dream) => dream.id == req.query.id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `You haven't dreamt of this yet... maybe try sleeping on it :P`,
    });
  }
}
//an interesting bug appears... if I try to run this code instead:

// export default function handler({query: id}, res) {
//   const filtered = dreams.filter((dream) => dream.id === id);
//   if (filtered.length > 0) {
//     res.status(200).json(filtered[0]);
//   } else {
//     res.status(404).json({
//       message: `You haven't dreamt of this yet... maybe try sleeping on it :P`,
//     });
//   }
// }

//for some reason, the destructuring doesn't work too well and it returns undefined. I also have to use == instead of === (not the biggest deal not using exact, but it's always nice to have it...)
