const Products = require('../models/product.model')
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

// Multer setup
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: storage });

cloudinary.config({
    cloud_name: "dkdovv1mp",
    api_key: "689329276849189",
    api_secret: "NAySxZhmVYt9l8veK_SXshI-HCU",
});

async function uploadToCloudinary(locaFilePath) {

    // locaFilePath: path of image which was just
    // uploaded to "uploads" folder

    var mainFolderName = "main";
    // filePathOnCloudinary: path of image we want
    // to set when it is uploaded to cloudinary
    var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

    return cloudinary.uploader
        .upload(locaFilePath, { public_id: filePathOnCloudinary })
        .then((result) => {

            // Image has been successfully uploaded on
            // cloudinary So we dont need local image 
            // file anymore
            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);

            return {
                message: "Success",
                url: result.url,
            };
        })
        .catch((error) => {

            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
}

async function checkIfSlugExist(slug) {
    try {
        const product = await Products.findOne({slug: slug})
        if (product == null) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
}

function generateSlugFromTitle(title){
    return title.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "") 
}

function getRelatedProducts(){
    // get related products of the current product
    // 1. map through the category of the given product
    // 2. check for the product who have same category and of same type male of female or its kids wear or not
    // 3. if we found proudcts in this category add those products to the list of the given products
    // 4. return array of related products
}

async function generateSlug(title) {
    
    let slug = generateSlugFromTitle(title)
    let count = 0;
    let isExist;
    do{    
        isExist = await checkIfSlugExist(slug)
        if(isExist){
            slug = generateSlugFromTitle(title) + "-" + count.toString();
            count++;
        }else{
            return slug;
        }
    }while(isExist)
}

router.post('/', upload.array("product-images", 12), async (req, res) => {
    let imageUrlList = [];

    if(req.files){
        for (let i = 0; i < req.files.length; i++) {
            let locaFilePath = req.files[i].path;
    
            // Upload the local image to Cloudinary
            // and get image url as response
            let result = await uploadToCloudinary(locaFilePath);
            imageUrlList.push(result.url);
        }
    }
    try {

        // filter to make all the categories lowercase before adding
        let categories = [] 
        req.body.category.map((category) => {
            categories.push(category.toLowerCase()) 
        })

        const product = await Products.create({
            productName: req.body.productName,
            description: req.body.description,
            price: req.body.price,
            slug: await generateSlug(req.body.productName),
            images: imageUrlList,
            category: categories,
            technicalFeatures: req.body.technicalFeatures,
            sizes: req.body.sizes,
            gender : req.body.gender,
            kids: req.body.kids
        })
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Products.find()
        res.json({ status: 'ok', data: data })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.patch('/update/:slug',upload.array("product-images", 12) , async (req, res) => {
    try {
        const updatedBody = req.body;
        let imageUrlList = [];

        if(req.files){
            for (var i = 0; i < req.files.length; i++) {
                var locaFilePath = req.files[i].path;
        
                // Upload the local image to Cloudinary
                // and get image url as response
                var result = await uploadToCloudinary(locaFilePath);
                imageUrlList.push(result.url);
            }
        }
        updatedBody.images = imageUrlList;
        // update the slug according to the new product name 
        if(req.body.productName){
            updatedBody.slug = await generateSlug(req.body.productName)
        }       
        const data = await Products.findOneAndUpdate({ slug: req.params.slug }, updatedBody)
        res.json({ status: 'ok', message: 'product updated successfully' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.get('/:slug', async (req, res) => {
    // get the single product and relative products
    try {
        const data = await Products.findOne({slug: req.params.slug})
        const relatedProducts = await Products.find({ gender: data.gender, category: data.category, kids: data.kids})
        const filteredRelatedProducts = relatedProducts.filter((product)=>{
            return product.slug != data.slug
        })
        res.json({ status: 'ok', data: data, relatedProducts: filteredRelatedProducts })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.get('/explore/:gender/:category', async (req, res) => {
    // get the list of products in the explore page
    let gender, isKids = false;
    switch(req.params.gender){
        case 'men':
            gender = 'M'
            break;
        case 'women':
            gender = 'F'
            break;
        case 'kids':
            isKids = true;
            break;
    }
    try {
        const data = await Products.find({kids: isKids, gender: gender, category: req.params.category})
        res.json({ status: 'ok', data: data })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.get('/explore/:gender/', async (req, res) => {
    // get the list of products in the explore page
    let gender, isKids = false;
    switch(req.params.gender){
        case 'men':
            gender = 'M'
            break;
        case 'women':
            gender = 'F'
            break;
        case 'kids':
            isKids = true;
            break;
    }
    try {
        const data = await Products.find({kids: isKids, gender: gender})
        res.json({ status: 'ok', data: data })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.delete('/delete/:slug', async (req, res) => {
    try {
        const data = await Products.findOneAndDelete({slug: req.params.slug })
        res.json({ status: 'ok', message: 'product Deleted successfully' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

module.exports = router;