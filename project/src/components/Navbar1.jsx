import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import LoginButton from "./LoginButton ";

const Navbar1 = () => {

  return (
    <Box className="shadow">
      <HStack
        spacing="24px"
        marginLeft="200px"
        marginTop="20px"
        marginRight="200px"
      >
        <Box>
          <img
            width="55px"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh_Yo2_3WZm0M-tReDPHQ1msyiht6iQZR3cQzM-0jxwvYUab9m"
          />
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              <b>Categories</b>
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <b>All Categories</b>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/easter/-/N-5xt1n">Easter</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/grocery/-/N-5xt1a">Grocery</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/clothing-shoes-accessories/-/N-rdihz">Clothing, Shoes & Accessories</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/home/-/N-5xtvd">Home</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/furniture/-/N-5xtnr">Furniture</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/kitchen-dining/-/N-hz89j">Kitchen & Dining</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/outdoor-living-garden/-/N-5xtq9">Outdoor Living & Garden</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/electronics/-/N-5xtg6">Electronics</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/video-games/-/N-5xtg5">Video Games</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/toys/-/N-5xtb0">Toys</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/movies-music-books/-/N-5xsxe">Movies, Music & Books</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/sports-outdoors/-/N-5xt85">Sports & Outdoors</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/baby/-/N-5xtly">Baby</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/beauty/-/N-55r1x">Beauty</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/personal-care/-/N-5xtzq">Personal Care</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/health/-/N-5xu1n">Health</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/pets/-/N-5xt44">Pets</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/household-essentials/-/N-5xsz1">Household Essentials</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/school-office-supplies/-/N-5xsxr">School & Office Sewing</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/party-supplies/-/N-5xt3c">Party Supplies</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/luggage/-/N-5xtz1">Luggage</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/target-optical/-/N-4y8o9">Target Optical</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/clearance/-/N-5q0ga">Clearance</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/gift-ideas/-/N-96d2i">Gift Ideas</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/character-shop/-/N-5oux8">Character Shop</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/gift-cards/-/N-5xsxu">Gift Cards</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/black-owned-or-founded-brands-at-target/-/N-q8v16">Black-Owned or Founded Brands at Target</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              Deals
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <a href="https://www.target.com/c/top-deals/-/N-4xw74">Top Deals</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/circle/offers">Target Circle Offers</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://weeklyad.target.com/">Weekly Ad</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/clearance/-/N-5q0ga">Clearance</a>
              </MenuItem>
              <hr />
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              New & Featured
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <a href="https://www.target.com/c/what-s-new/-/N-o9rnh?lnk=C_TargetNewArrivals_WEB-394594_0">Target New Arrivals</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/finds?lnk=FINDS_GDD">Target Finds</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/finds/targetstyle?lnk=TS_GDD">#Target Style</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/black-owned-or-founded-brands-at-target/-/N-q8v16?lnk=C_Black-OwnedorFoundedBrandsatTarget_WEB-394594_3">Black Beyond Measures</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/mas-que/-/N-639c7?lnk=C_M%C3%A1sQue_WEB-394594_4">Mas Que</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/pride/-/N-5589f?lnk=C_PRIDE_WEB-394594_5">Pride 365</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/women-owned-brands-at-target/-/N-duljx?lnk=C_Women-OwnedBrandsatTarget_WEB-394594_6">Women-Owned Brands at Target</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/asian-owned-brands-at-target/-/N-izjcd?lnk=C_Asian-OwnedBrandsatTarget_WEB-394594_7">Asian-Owned Brands at Target</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              Pickup & Delivery
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <a href="https://www.target.com/c/order-pickup/-/N-ng0a0">Shop Order Pickup</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="https://www.target.com/c/same-day-delivery/-/N-bswkz">Shop Same Day Delivery</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className="input">
          <Box>
            <Input
              placeholder="What can we help you find?"
              size="md"
              type="text"
            />
          </Box>
          <Box className="abc">
            <FaMicrophone /> 
            <FaSearch />
          </Box>
        </Box>
        <Box>
          {/* <Button className="bcd">
            <span><IoIosContact />{"  "} <a href="">Sign in</a> </span>
          </Button> */}
          <LoginButton />
        </Box>
        <Box>
        <i className="fa-solid fa-cart-shopping"></i>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar1;
