document.getElementById('connectButton').addEventListener('click', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        var accounts = await web3.eth.getAccounts();
        document.getElementById("account").innerHTML = accounts[0];
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
    } else {
      console.log('Navegador no-Ethereum detectado. Considera probar MetaMask!');
    }
  });