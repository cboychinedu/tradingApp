let web3;
let provider;
let selectedAccount;

const connectWallet = async () => {
  const providerOptions = {
    walletconnect: {
      package: window.WalletConnectProvider.default,
      options: {
        rpc: {
          1: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
        },
      },
    },
  };

  const web3Modal = new window.Web3Modal.default({
    cacheProvider: false,
    providerOptions,
  });

  provider = await web3Modal.connect();
  web3 = new Web3(provider);

  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  document.getElementById("status").innerText = "Connected: " + selectedAccount;

  // Step 1: Get nonce from Flask
  const nonceRes = await fetch("/get_nonce", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: selectedAccount }),
  });
  const { nonce } = await nonceRes.json();

  // Step 2: Ask wallet to sign message
  const signature = await web3.eth.personal.sign(nonce, selectedAccount);

  // Step 3: Verify signature on backend
  const verifyRes = await fetch("/verify_signature", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: selectedAccount, signature }),
  });

  const result = await verifyRes.json();
  if (result.success) {
    document.getElementById("status").innerText = `✅ Verified: ${result.address}`;
  } else {
    document.getElementById("status").innerText = `❌ Verification failed`;
  }
};

// 
document.getElementById("connectButton").addEventListener("click", connectWallet);




// static/wallet-multi.js
const projectId = "d38b047025ef5a3928c79ab92f7122c3"; // 👉 get one free from https://cloud.walletconnect.com
