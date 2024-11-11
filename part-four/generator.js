function generatePrimes(quota){
    function isPrime(n){
        for (let c = 2; c <= Math.sqrt(n); ++c){
            if (n % c === 0){
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota){
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)){
            primes.push(candidate);
        }
    }
    return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").ariaValueMax;
    const primes = generatePrimes(quota);
    document.querySelector("#output").textContent = "Finished generating ${quota} primes!";
});

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value = 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});

// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
      generatePrimes(message.data.quota);
    }
  });
  
  // Generate primes (very inefficiently)
  function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    postMessage(primes.length);
  }
  