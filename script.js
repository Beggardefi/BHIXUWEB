// ==== Wallet Connection ====
let userAddress = "";

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      document.getElementById('wallet-address').innerText = `Connected: ${shortAddress(userAddress)}`;
    } catch (err) {
      alert("Wallet connection denied.");
    }
  } else {
    alert("Please install MetaMask or Trust Wallet.");
  }
}

function shortAddress(addr) {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

document.getElementById("connect-wallet").addEventListener("click", connectWallet);

// ==== Countdown Timer ====
const countdown = () => {
  const endTime = new Date("May 31, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "Presale Ended";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
};

setInterval(countdown, 1000);

// ==== Smooth Scroll to Sections ====
document.querySelectorAll("a.scroll-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// ==== Buy BHIXU Buttons (Mock Logic) ====
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!userAddress) return alert("Connect your wallet first.");
    alert("Purchase functionality coming soon. Please wait for contract integration.");
  });
});

// ==== Staking Functions ====
document.getElementById("stake-btn").addEventListener("click", () => {
  if (!userAddress) return alert("Connect your wallet to stake.");
  alert("Staking BHIXU… (Smart contract integration pending)");
});

document.getElementById("unstake-btn").addEventListener("click", () => {
  if (!userAddress) return alert("Connect your wallet to unstake.");
  alert("Unstaking BHIXU… (Smart contract integration pending)");
});

document.getElementById("claim-rewards").addEventListener("click", () => {
  if (!userAddress) return alert("Connect wallet to claim rewards.");
  alert("Claiming rewards… (Smart contract integration pending)");
});

// ==== Referral System ====
document.getElementById("generate-referral").addEventListener("click", () => {
  if (!userAddress) return alert("Connect your wallet to generate referral.");
  const referralLink = `${window.location.origin}?ref=${userAddress}`;
  navigator.clipboard.writeText(referralLink);
  alert(`Referral Link Copied:\n${referralLink}`);
});

document.getElementById("apply-referral").addEventListener("click", () => {
  const refInput = document.getElementById("referral-code").value;
  if (!refInput) return alert("Enter a referral address.");
  alert(`Referral code applied: ${refInput}`);
});

// ==== Bot Launch Section Access Control ====
function checkBotAccess() {
  // Placeholder logic; actual stake balance check should be on-chain
  const stakedAmount = 100; // Simulated
  const botSection = document.getElementById("bot-section");
  const accessMessage = document.getElementById("bot-access-message");

  if (stakedAmount >= 100) {
    accessMessage.innerText = "Access Granted! You can download and use the bot.";
    document.getElementById("download-bot").style.display = "inline-block";
  } else {
    accessMessage.innerText = "Stake at least $100 worth of BHIXU to access the bot.";
    document.getElementById("download-bot").style.display = "none";
  }
}

document.getElementById("check-bot-access").addEventListener("click", () => {
  if (!userAddress) return alert("Connect wallet to check access.");
  checkBotAccess();
});

// ==== Airdrop Claim Placeholder ====
document.getElementById("claim-airdrop").addEventListener("click", () => {
  if (!userAddress) return alert("Connect wallet to claim airdrop.");
  alert("Airdrop claim logic will be activated after smart contract deployment.");
});

// ==== Superhero & Metaverse Button Actions ====
document.getElementById("join-superhero").addEventListener("click", () => {
  alert("Redirecting to Superhero Registration (Coming Soon)");
});

document.getElementById("enter-metaverse").addEventListener("click", () => {
  alert("Entering the Metaverse... (Launching soon)");
});

// ==== AutoBot Buy Button ====
document.getElementById("buy-bot").addEventListener("click", () => {
  alert("Bot Purchase Page Coming Soon!");
});
