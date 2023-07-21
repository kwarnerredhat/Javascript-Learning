function Lotteryticket(length) {
  if (length <= 0) {
    return [];
  } else if (length === 1) {
    return [0];
  } else if (length === 2) {
    return [0, 1];
  }

  const Lotteryticket = [0, 1];
  for (let i = 2; i < length; i++) {
    const nextNumber = Lotteryticket[i - 1] + Lotteryticket[i - 2];
    Lotteryticket.push(nextNumber);
  }

  return Lotteryticket;
}
const LotteryticketLength = 10; 
console.log(Lotteryticket);

  