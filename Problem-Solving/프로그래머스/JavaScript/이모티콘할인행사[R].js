function solution(users, emoticons) {
  const getPermutations = n => {
    // permutation with repetition
    const discountRate = [10, 20, 30, 40];
    const permutations = [];

    const permute = (result = []) => {
      if (result.length === n) {
        permutations.push([...result]);
        return;
      }
      for (let i = 0; i < discountRate.length; i++) {
        result.push(discountRate[i]);
        permute(result);
        result.pop();
      }
    };
    permute([], n);
    return permutations;
  };

  const calcDiscountPrice = (price, rate) => {
    return price - price * rate * 0.01;
  };

  const startSelling = rates => {
    let joinPeopleCount = 0;
    let totalPrice = 0;

    users.forEach(user => {
      const [maxRate, maxPrice] = user;
      let price = 0;
      rates.forEach((rate, idx) => {
        if (rate >= maxRate) {
          price += calcDiscountPrice(emoticons[idx], rate);
        }
      });
      if (price >= maxPrice) {
        joinPeopleCount++;
        price = 0;
      }
      totalPrice += price;
    });

    return [joinPeopleCount, totalPrice];
  };

  const permutations = getPermutations(emoticons.length);
  let joinPeopleCount = 0;
  let maxPrice = 0;

  permutations.forEach(permutation => {
    const [count, price] = startSelling(permutation);
    if (count > joinPeopleCount) {
      joinPeopleCount = count;
      maxPrice = price;
    }
    if (count === joinPeopleCount) {
      maxPrice = Math.max(price, maxPrice);
    }
  });

  return [joinPeopleCount, maxPrice];
}
