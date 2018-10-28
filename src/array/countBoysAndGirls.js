
const countBoysAndGirls = (arr) => {
  let boys = 0;
  let girls = 0;

  arr.forEach((value) => {
    if (value.gender === 'M') {
      boys += 1;
    } else if (value.gender === 'F') {
      girls += 1;
    }
  });
  return { boys, girls };
};

exports.countBoysAndGirls = countBoysAndGirls;
