class PrimeChecker {
    constructor(number) {
        this.number = number;
    }

    isPrime() {
        if (this.number <= 1) return false; // 0 and 1 are not prime numbers
        if (this.number <= 3) return true;  // 2 and 3 are prime numbers

        // Eliminate multiples of 2 and 3
        if (this.number % 2 === 0 || this.number % 3 === 0) return false;

        // Check for prime by testing divisibility
        for (let i = 5; i * i <= this.number; i += 6) {
            if (this.number % i === 0 || this.number % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    }
}

// Example usage:
const primeChecker = new PrimeChecker(29);
console.log(primeChecker.isPrime()); // Output: true
