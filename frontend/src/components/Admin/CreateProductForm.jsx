import React, { useState, useEffect } from "react";
import { validateUser } from "../../scripts/Auth";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 850,
    },
  },
};

function CreateProductForm() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [category, setCategory] = useState([]);
  const [gender, setGender] = useState();
  const [technicalFeature, setTechnicalFeature] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const theme = useTheme();

  const categories = ["fashion", "jacket", "denim", "summer wears"];
  const technicalFeatures = [
    "Premium Fabric",
    "Regular Fit",
    "Water Resistant",
    "Wind Resistant",
  ];

  useEffect(() => {
    const checkUserAuthenticity = async () => {
      await validateUser().then((data) => {
        setIsAdmin(data.data.isAdmin);
      });
    };

    checkUserAuthenticity();
  }, []);

  function getStyles(name, category, theme) {
    return {
      fontWeight:
        category.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeFeatures = (event) => {
    const {
      target: { value },
    } = event;
    setTechnicalFeature(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
  };

  if (isAdmin) {
    return (
      <div className="my-16 w-full">
        <form
          className="w-3/4 mx-auto px-12 py-12"
          onSubmit={handleCreateProduct}
        >
          <div className="flex my-4">
            <label className="MaisonNeueMonoRegular w-1/4 font-bold tracking-widest mr-12">
              Images :
            </label>
            <input
              className="w-3/4"
              type="file"
              name="file"
              onChange={changeHandler}
              multiple
            />
          </div>
          {/* input field for the product name */}
          <div className="flex justify-between  my-4">
            <label className="MaisonNeueMonoRegular  w-1/4 font-bold tracking-widest mr-12">
              Product Name :
            </label>
            <input
              type="text"
              value={productName}
              className="w-3/4 font-thin h-10 px-8 text-sm mx-12 border-2 border-black"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          {/* Text area for the product description */}
          <div className="flex justify-between  my-4">
            <label className="MaisonNeueMonoRegular w-1/4 font-bold tracking-widest mr-12">
              Product Description :
            </label>
            <textarea
              type="text"
              rows="4"
              className="w-3/4 font-thin px-8 text-sm mx-12 border-2 border-black"
              value={productDescription}
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}
            />
          </div>
          {/* input field for the price of the product */}
          <div className="flex my-4">
            <label className="MaisonNeueMonoRegular w-1/4 font-bold tracking-widest mr-12">
              Product Price :
            </label>
            <input
              type="number"
              value={productPrice}
              className="w-3/4 font-thin h-10 px-8 text-sm mx-12 border-2 border-black"
              onChange={(e) => {
                setProductPrice(e.target.value);
              }}
            />
          </div>
          {/* multiple field selection for the product category */}
          <div className="flex my-4">
            <label className="MaisonNeueMonoRegular w-1/4 font-bold tracking-widest mr-12">
              Product Category :
            </label>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              className="w-3/4 mx-10 border-2 border-black"
              value={category}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {categories.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, category, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>
          {/* Technical features multiple tag list selection menu for it */}
          <div className="flex my-4">
            <label className="MaisonNeueMonoRegular w-1/4 font-bold tracking-widest mr-12">
              Features :
            </label>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              className="w-3/4 mx-10 border-2 border-black"
              value={technicalFeature}
              onChange={handleChangeFeatures}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {technicalFeatures.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, technicalFeature, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>
          {/* sizes multiple select option  */}

          {/* gender selection drop down menu */}
          <div className="flex my-4">
            <label className="MaisonNeueMonoRegular w-1/4 font-bold tracking-widest mr-12">
              Gender :
            </label>
            <Select
              labelId="demo-simple-select-label"
              className="w-3/4 mx-10 border-2 border-black"
              value={gender}
              onChange={(e) => {setGender(e.target.value)}}
            >
              <MenuItem value={"M"}>Male</MenuItem>
              <MenuItem value={"F"}>Female</MenuItem>
            </Select>
          </div>
          {/* isKid selection menu */}
          <div className="flex my-4 ml-4">
            <input
              type="checkbox"
              className="font-thin h-10 text-sm border-2 border-black"
              onChange={(e) => {}}
            />
            <label className="MaisonNeueMonoRegular font-bold tracking-widest mx-3 mt-1">
              For Kids
            </label>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
  } else {
    return (
      <div className="text-center w-full my-60 py-8 ">
        <h3 className="MaisonNeueMonoRegular py-4 text-2xl tracking-wider">
          Not Authorized user
        </h3>
        <Link className="MaisonNeueMonoRegular text-md tracking-wider" to="/">
          GO BACK TO HOME.....
        </Link>
      </div>
    );
  }
}

export default CreateProductForm;
