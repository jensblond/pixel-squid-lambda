import "./App.css";
import React, {} from "react";
import Web3 from 'web3';
// import { useMetaMask } from "metamask-react";
import {hot} from "react-hot-loader";
import {Helmet} from "react-helmet";
import logo from './images/pxsqLogo.png';
import preview from './images/preview.gif';
// import contractJson from './contracts/pixelSquids.json';
import Contract from 'web3-eth-contract';
Contract.setProvider(Web3.givenProvider || 'ws://127.0.0.1:8545');
window.ethereum.enable();

// const contractAddress = '0x8e9c050c06108fcd3cf92698e24c60d4461c4089';
// var contract = new Contract(contractJson.abi, contractAddress);
// let freeMint = 4000;

function App() {
    // const { status, connect, account } = useMetaMask();
    // const [totalSupply, setTotalSupply] = useState(0);
    // const [minted, setMinted] = useState(false);
    // const [minting, setMinting] = useState(false);
    
    // useEffect(() => {
    //   contract.methods.totalSupply().call().then( (supply) => {
    //     setTotalSupply(supply);
    //   });
    // }, []);

    // const mintHandler = () =>  {
    //   let amountToMint = document.getElementById("amount").value;
    //   let cost = Web3.utils.toWei('0');
    //   // let gasLimit = 210000;
    //   let totalCostWei = String(cost * amountToMint);
    //   // let totalGasLimit = String(gasLimit * amountToMint);
    //   if (amountToMint > 0 && amountToMint < 21) {
    //     console.log({amountToMint, cost, totalCostWei})
    //     if (totalSupply < freeMint) {
    //       totalCostWei = 0;
    //     }
    //     setMinting(true);
    //     contract.methods.mint(amountToMint).send(
    //       {
    //         from: account,
    //         to: contractAddress,
    //         value: totalCostWei
    //       })
    //       .once("error", (err) => {
    //         console.log(err);
    //         console.log("Sorry, something went wrong please try again later.");
    //       })
    //       .then((result) => {
    //         setMinted(true);
    //         console.log("minted")}
    //       )
    //       .catch((error) => {
    //         console.log('Error! not minted' + error);
    //       });
    //   } else {
    //     console.log("Please provide a correct amount");
    //   }
    // }

    return(
      <div className="App">
        <Helmet>
          <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
        </Helmet>
        <div className="pure-g"><div className="pure-u-1-1" style={{textAlign: "center"}}><img src={logo} alt="logo"/></div></div>
        <div className="pure-g"><div className="pure-u-1-1" style={{textAlign: "center"}}><img src={preview} alt="preview"/></div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1" id="mainText">
            Pixel Squids are your NFT Goodluck charm. The only utility is love and the roadmap is moon. 
            If your squid doesn't bring you 10x returns from the luck it provides to your NFT buys, then you should sell it. !!! All mints from now on are free! Happy new year!!!!
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-1 pixelfont" style={{textAlign: "center"}}>
            <br/>
            {/* <span>Your account is: </span><br/>
            <span style={{border: "1px dashed cyan",padding: "5px", backgroundColor: "cornflowerblue"}}>{account || '0x...'}</span> */}
            <br/><br/>
            <span>5000</span> / 5000 Minted
            <br/><br/>

            <img src="https://media0.giphy.com/media/MdmbQX6kXSUMBBYzE6/giphy.gif?cid=790b76118a10351abe9fa6f71d7cd2726584dd3306d98c41&rid=giphy.gif&ct=s" alt="Sold out!"/>

            {/* { (status === "initializing") && <div>Synchronisation with MetaMask ongoing...</div> }

            { (status === "unavailable") && <div>MetaMask not available :(</div> }

            { (status === "notConnected") && 
              <button onClick={connect} className="mint pure-button">Connect to MetaMask</button> 
            }
            
            { (status === "connecting") && <div>Connecting...</div> }
            
            { (status === "connected") && 
              <div>
                Amount: <input type="text" name="amount" id="amount" style={{width: "40px"}}/>
                <br/>
                { (minted === true) ? 
                  <button id="mint" className="mint pure-button">M!NTED!!!</button>
                :
                (minting === true) ?
                  <button id="mint" className="mint pure-button">MINTING???</button>
                :
                  <button onClick={() => mintHandler()} id="mint" className="mint pure-button">MINT</button>
                }
              </div>             
            } */}
            <br/><br/><br/><br/><br/>
          </div>
        </div>
        <div className="navbar">
          <a href="#home" className="active">Home</a>
          {/* <a href="#team">Team</a> */}
          <a href="https://twitter.com/Pixel_squids">Twitter</a>
          <a href="https://discord.gg/3qDFXZ2X">Discord</a>
          <a href="https://opensea.io/collection/pixelsquidsnft">Open Sea</a>
          <a href="https://etherscan.io/address/0x8e9c050c06108fcd3cf92698e24c60d4461c4089">Contract</a>
        </div>
        <div id="bg2"></div>
      </div>
    );
}

export default hot(module)(App);