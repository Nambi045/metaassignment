let NFTItem = []

function mintNFT(Name,Price,MFG_Date,Quantity){
    let NFT = {
        Name : Name,
        Price : Price,
        MFG_Date : MFG_Date,
        Quantity:Quantity
    }
    NFTItem.push(NFT)
}

function listNFTs(){
    for (let i =0; i<NFTItem.length; i++){
        console.log("\nID : " + (i + 1));
        console.log("Name: " + NFTItem[i].Name);
        console.log("Price: " + NFTItem[i].Price);
        console.log("MFG Date: " + NFTItem[i].MFG_Date);
        console.log("Quantity: " + NFTItem[i].Quantity);
    }
}

function getTotalSupply(){
    console.log("\nTotal NFTItem : "+ NFTItem.length);
}


mintNFT("soap",10,"01 June 2024",2);
mintNFT("Toothpaste",110,"02 May 2024",1);
mintNFT("Chocolate",50,"02 April 2024",10);

listNFTs();
getTotalSupply();
