import { File, Web3Storage } from "web3.storage";
import dotenv from "dotenv";

dotenv.config();

// const { NEXT_PUBLIC_WEB3STORAGE_TOKEN } = process.env;

// if (!NEXT_PUBLIC_WEB3STORAGE_TOKEN) {
//   throw new Error("NEXT_PUBLIC_WEB3STORAGE_TOKEN not found in .env file");
// }

const ipfs = "https://w3s.link/ipfs";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVFOTUzZjhENDFGNkRFRjQ5RGEzMzYxODkyNzRFNDhBNjE0YjAyNTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjgwODM4ODk3MzcsIm5hbWUiOiJza3l3b29kLnVyYmFuIn0.L4s7ztTLukk2TBGvBlyVQ7xUbPX8lNVS8tHR4o3y-tU";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

async function storeImage(imageFile) {
  const client = makeStorageClient();

  const cid = await client.put([imageFile], {
    wrapWithDirectory: false,
  });

  console.log("Stored image with CID:", `${ipfs}/${cid}`);

  return cid;
}

export const storeMetadata = async (dataObject, imageFile) => {
  let obj;

  const imagecid = await storeImage(imageFile);
  const imageUrl = `${ipfs}/${imagecid}`; // Usar un nombre diferente como 'imageUrl'

  obj = {
    description: dataObject.description,
    image: imageUrl, // Usar 'imageUrl' aquí
    name: dataObject.name,
  };

  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
  const files = [new File([blob], "metadata.json")];

  console.log("Uploading Certificate metadata to IPFS via web3.storage");

  const client = makeStorageClient();

  const cid = await client.put(files, {
    wrapWithDirectory: false,
  });

  console.log("Stored files with CID:", `${ipfs}/${cid}`);

  return `${ipfs}/${cid}`;
};
