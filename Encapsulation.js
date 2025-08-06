class BankAccount {
  #balance = 0;
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      console.log("Invalid amount");
    }
  }
  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;

    } else {
      console.log("Invalid amount or insufficient balance");
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(50);
console.log(myAccount.getBalance()); // Output: 50


