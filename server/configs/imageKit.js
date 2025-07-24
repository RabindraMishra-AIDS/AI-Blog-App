import ImageKit from "imagekit";

// Setting UP congiguration for imagekit


var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_KEY
});

export default imagekit;