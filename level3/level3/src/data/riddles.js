
const distractionQuestions = [
    {
      question: `def fib(n):
      return n if n <= 1 else fib(n-1) + fib(n-2)
  total = sum(fib(i) for i in range(15))  # Sum of first 15 Fibonacci numbers
  print(total)`,
      answer: "1596",
    },
    {
      question: `import math
  x = math.factorial(7) + 4321
  print(x)`,
      answer: "12049",
    },
    {
      question: `arr = [3, 5, 7, 9, 11]
  product = 1
  for i in arr:
      product *= i
  print(product)`,
      answer: "10395",
    },
    {
      question: `def calc():
      x = 99**2
      return x + 198
  print(calc())`,
      answer: "9999",
    },
    {
      question: `num = 0
  for i in range(100, 110):
      num += (i * i) % 97
  print(num * 19)`,
      answer: "13300",
    },
    {
      question: `def shift(n):
      return int(str(n)[::-1]) + 4321
  
  print(shift(12345))`,
      answer: "97566",
    },
    {
      question: `from functools import reduce
  nums = [2, 5, 3, 7, 19]
  print(reduce(lambda x, y: x * y, nums))`,
      answer: "3990",
    },
    {
      question: `nums = list(range(20, 25))
  result = sum(nums) ** 2
  print(result)`,
      answer: "13225",
    },
    {
      question: `def recur_pow(n):
      if n == 0:
          return 0
      return n**2 + recur_pow(n-1)
  
  print(recur_pow(10) * 26)`,
      answer: "10010",
    },
    {
      question: `nums = [10, 20, 30, 40, 50]
  code = sum(nums[i] * (i+1) for i in range(len(nums)))
  print(code * 5)`,
      answer: "13750",
    },
    {
      question: `text = "ECHO"
  total = sum(ord(c) for c in text)
  print(total * 123)`,
      answer: "30804",
    },
    {
      question: `primes = [2, 3, 5, 7, 11, 13, 17]
  total = sum(i * p for i, p in enumerate(primes))
  print(total + 777)`,
      answer: "2099",
    },
    {
      question: `count = 0
  for i in range(1, 6):
      for j in range(1, i + 1):
          count += i * j
  print(count * 89)`,
      answer: "25365",
    },
    {
      question: `nums = [2, 4, 6, 8, 10]
  val = 1
  for n in nums:
      if n % 4 == 0:
          val *= n + 3
      else:
          val *= n
  print(val)`,
      answer: "9240",
    },
    {
      question: `lst = list(range(10, 20))
  section = lst[2:7]  # [12, 13, 14, 15, 16]
  total = sum(x**2 for x in section)
  print(total)`,
      answer: "990",
    },
  ];
  
  // Generate all tile IDs (A1 to H8)
  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  const allTiles = [];
  
  files.forEach((file) => {
    ranks.forEach((rank) => {
      allTiles.push(`${file}${rank}`);
    });
  });
  
  const riddles = {};
  
  allTiles.forEach((tile) => {
    if (tile === "E5") {
      riddles[tile] = {
        question: `def cipher_sum():
      return sum(((i**2 + 3*i) % (i % 5 + 2)) ** (i % 3 + 1) for i in range(10, 26) if i % 4 != 0)
  
  print(cipher_sum())`,
        answer: "124",
      };
    } else {
      const distraction = distractionQuestions[Math.floor(Math.random() * distractionQuestions.length)];
      riddles[tile] = distraction;
    }
  });
  
  export default riddles;
  