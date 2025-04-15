// ====== Wallet + Web3 Setup ======
let web3;
let bhixuContract;
const contractAddress = "0x03Fb7952f51e0478A1D38a56F3021CFca8a739F6"; // BHIXU token
const presaleReceiver = "0xeEe1bbe91D8613783996293ca438E5606b0874c3"; // Change this to your wallet

const bhixuABI = [ /* paste your full ABI here */ ];

async function connectWallet() {
  if (window.ethereum) {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);
      bhixuContract = new web3.eth.Contract(bhixuABI, contractAddress);
      const accounts = await web3.eth.getAccounts();
      document.getElementById('walletAddress').innerText = `${accounts[0].slice(0,6)}...${accounts[0].slice(-4)}`;
    } catch (error) {
      alert('Wallet connection failed');
    }
  } else {
    // Deep link for Trust Wallet on mobile
    window.location.href = 'https://link.trustwallet.com/open_url?coin_id=20000714&url=' + window.location.href;
  }
}

// ====== BUY BHIXU WITH BNB ======
async function buyBHIXUWithBNB(amountBNB) {
  if (!web3) await connectWallet();
  const accounts = await web3.eth.getAccounts();
  const valueInWei = web3.utils.toWei(amountBNB.toString(), "ether");

  try {
    await web3.eth.sendTransaction({
      from: accounts[0],
      to: presaleReceiver,
      value: valueInWei,
    });
    alert("Purchase successful. You will receive tokens after presale.");
  } catch (error) {
    console.error("Buy BNB failed:", error);
    alert("Transaction failed.");
  }
}

// ====== BUY BHIXU WITH USDT ======
async function buyBHIXUWithUSDT(usdtAddress, amountUSDT) {
  if (!web3) await connectWallet();
  const accounts = await web3.eth.getAccounts();
  const usdtContract = new web3.eth.Contract([
    { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }
  ], usdtAddress);

  const decimals = 18;
  const amount = web3.utils.toBN(amountUSDT * (10 ** decimals));

  try {
    await usdtContract.methods.transfer(presaleReceiver, amount).send({ from: accounts[0] });
    alert("USDT sent. You’ll receive BHIXU soon.");
  } catch (e) {
    console.error("USDT transfer failed", e);
    alert("USDT transfer failed.");
  }
}

// ====== STAKING ======
async function stakeBHIXU(amount) {
  if (!web3) await connectWallet();
  const accounts = await web3.eth.getAccounts();
  const decimals = await bhixuContract.methods.decimals().call();
  const value = web3.utils.toBN(amount * (10 ** decimals));

  try {
    await bhixuContract.methods.approve(contractAddress, value).send({ from: accounts[0] });
    // You can then send to a staking smart contract (if deployed)
    alert("Tokens approved for staking. (Staking logic will be smart-contract based)");
  } catch (err) {
    alert("Staking failed.");
    console.log(err);
  }
}

// ====== CHECK STAKED AMOUNT FOR BOT ACCESS ======
async function checkBotEligibility() {
  if (!web3) await connectWallet();
  const accounts = await web3.eth.getAccounts();
  const balance = await bhixuContract.methods.balanceOf(accounts[0]).call();
  const readable = web3.utils.fromWei(balance, 'ether');
  if (parseFloat(readable) >= 100) {
    document.getElementById('botAccess').style.display = 'block';
  } else {
    document.getElementById('botAccess').style.display = 'none';
  }
}

// ====== REFERRAL SYSTEM ======
function copyReferral() {
  const referralLink = `${window.location.origin}?ref=${window.ethereum.selectedAddress}`;
  navigator.clipboard.writeText(referralLink);
  alert("Referral link copied!");
}

function getReferralAddress() {
  const params = new URLSearchParams(window.location.search);
  return params.get("ref") || null;
}

// ====== MENU SCROLLING ======
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

// ====== Initialize UI on Load ======
window.addEventListener('load', () => {
  getReferralAddress();
  checkBotEligibility();
});chase Page Coming Soon!");
});
