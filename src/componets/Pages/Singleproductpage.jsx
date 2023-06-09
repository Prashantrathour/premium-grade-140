import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Stack,
  Spacer,
  FormControl,
  Input,
  UnorderedList,
  ListItem,
  List,
  Img,
  SimpleGrid,
  Grid,
  Spinner,
  Toast,
} from "@chakra-ui/react";
import MegaMenu from "./Megadropdown";
import CartPage from "./Cartpage";
import {
  BsBagHeart,
  BsFillBagHeartFill,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { BiPurchaseTag, BiShoppingBag } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getdata = (param, id) => {
  return axios.get(`https://infinity-com.onrender.com/${param}/${id}`);
};
export default function Singleproductpage() {
  let { id } = useParams();
  const { param } = useParams();


  console.log(getdata);
  const [product, setproduct] = useState({});
  const [trans, settrans] = useState(false);

  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [qty, setqty] = useState(1);

  const fetchdata = async () => {
    try {
      setloading(true);
      let data = await getdata(param, id);

      setproduct(data.data);

      setloading(false);
      seterror(false);
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [id, param]);
 
  
  const notify = () => toast("Wow so easy!");
const posthandle=async()=>{

  try {
    let res=await axios.post(`https://infinity-com.onrender.com/addcartdata`, {...product,qty:qty});
    console.log(res.response)
    toast.success("Product added ")
    setTimeout(()=>{
      settrans(true)
    return axios.get(`https://infinity-com.onrender.com/addcartdata`)
    settrans(false)
    },5000)
    
  } catch (error) {
    console.log("error",error);
    console.log("error----------------------------------")
    toast.warn("Product allready added ")
   
  }

}
const addtocart=async()=>{

  try {
    let res=await axios.post(`https://infinity-com.onrender.com/addcartdata`, {...product,qty:qty});
    console.log(res.response)
    toast.success("Product added ")
    setTimeout(()=>{
      settrans(true)
    return axios.get(`https://infinity-com.onrender.com/addcartdata`)
    settrans(false)
    },5000)
    
  } catch (error) {
    console.log("error",error);
    console.log("error----------------------------------")
    toast.warn("Product allready added ")
   
  }

}

  return loading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Box m="auto" w="full">
      <MegaMenu />
      <ToastContainer/>
      <Box display={{ md: "flex" }}>
        <Box w={{ md: "50%" }} mb={{ base: "2rem", md: "0" }} margin={5}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {console.log("pro", product)}
         <Image
              src={product.images[0]}
              alt="product image"
            />
            <Image
              src={product.images[1] || product.images[0]}
              alt="product image"
            />
            <Image
              src={product.images[2] || product.images[0]}
              alt="product image"
            />
            <Image
              src={product.images[3] || product.images[0]}
              alt="product image"
            />
            <Image
              src={product.images[4] || product.images[0]}
              alt="product image"
            />
            <Image
              src={product.images[5] || product.images[0]}
              alt="product image"
            />
            <Image
              src={product.images[6] || product.images[0]}
              alt="product image"
            /> 
          </Grid>
        </Box>
        <Box w={{ md: "50%" }}>
          <Flex flexDirection={"column"}>
            <Heading as="sub" size="xl" mb="1rem">
              {product.title}
            </Heading>
            <Text as="h3" color={"gray"} size="lg" mb="1rem">
              {product.type}
            </Text>
            <Flex gap={2}>
              <Button bg={"white"} variant={"outline"} textAlign={"center"}>
                4.5 <BsStarFill style={{ color: "green", margin: "5px" }} />
                <Text color={"gray"} as={"span"} m={2} paddingBottom={2}>
                  |
                </Text>{" "}
                <Text color={"gray"} as={"span"}>
                  728
                </Text>
                <Text color={"gray"} as={"span"} fontSize={"sm"} m={1}>
                  Rating
                </Text>
              </Button>
            </Flex>
            <Divider variant={"solid"} p="5px" w="90%" textAlign={"center"} />
            <Box mt={3}>
              <Flex direction={"row"}>
                <Menu>
                  <MenuButton
                    textAlign={"center"}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                    _focus={{ boxShadow: "outline" }}
                    width={150}
                    height={10}
                  >
                    <Text
                      fontSize="2xl"
                      fontWeight="semibold"
                      mb="1rem"
                      textAlign={"center"}
                      mt="10px"
                    >
                    {/* -----------------------------------price---------------------------------------- */}
                     ₹{+product.price*qty}
                    </Text>
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={"flex"} flexDirection={"column"}>
                      {" "}
                      <Heading as={"strong"} fontSize={"sm"}>
                        Price Details
                      </Heading>
                      <Flex flexDirection={"row"}>
                        {" "}
                        <Box>
                          <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            gap={5}
                          >
                            <Flex direction={"column"}>
                              <Text>Maximum Retail Price</Text>{" "}
                              <Text as={"span"}>(Incl. of all taxes)</Text>
                            </Flex>
                            <Stack>
                              {" "}
                              <Text as={"span"}>Rs. {+product.price*qty}</Text>
                            </Stack>
                          </Flex>
                          <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            gap={5}
                          >
                            <Flex direction={"column"}>
                              <Text as={"span"}>Discount</Text>
                            </Flex>
                            <Stack>
                              <Text as={"span"}>(30% OFF)</Text>
                            </Stack>
                          </Flex>
                          <Flex
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            gap={5}
                          >
                            <Flex direction={"column"}>
                              <Text>Selling Price</Text>{" "}
                              <Text as={"span"}>(Incl. of all taxes)</Text>
                            </Flex>
                            <Stack>
                              <Text as={"span"}>{product.price_max+500}</Text>
                            </Stack>
                          </Flex>
                        </Box>
                      </Flex>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem></MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
            <Box as="flex" flexFlow={"column"} mt={5} p={6}>
              <Heading fontSize={"sm"}>MRP {product.price+400}</Heading>
            </Box>
          </Flex>
          <Box mb="1rem">
            <Text fontSize="lg" mb="0.5rem">
              Quantity
            </Text>
            <NumberInput
              defaultValue={1}
              min={1}
              max={10}
              w={{ base: "100%", md: "40%" }}onChange={(e)=>setqty(e)}
            >
              <NumberInputField />
              <NumberInputStepper >
                <NumberIncrementStepper  />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Flex gap={5}>
            <Button
              backgroundColor="#ff527b"
              _hover={{ bgColor: "#ff527b" }}
              color={"white"}
              borderColor={"#ff527b"}
              size="lg"
              mb={{ base: "2rem", md: "0" }}
         onClick={addtocart}
              
            >
              <Flex as="flex" gap={1} flexDirection={"row"}>
                {" "}
                <BiShoppingBag />
                <NavLink to={`/productpage/${param}/cartpage/${id}`}><Text>Add to Cart</Text></NavLink>
                <Spacer />{" "}
              </Flex>
            </Button>
            <Button
              backgroundColor="#ff527b"
              _hover={{ bgColor: "#ff527b" }}
              color={"white"}
              borderColor={"#ff527b"}
              size="lg"
              mb={{ base: "2rem", md: "0" }}
              onClick={posthandle}
            >
              <Flex as="flex" gap={1} flexDirection={"row"}>
                {" "}
                <BsFillBagHeartFill />
                <Text> Wish List</Text>
                <Spacer />{" "}
              </Flex>
            </Button>
          </Flex>
          <Flex mt={2} flexDirection={"row"} gap={6}>
            <Heading fontSize={"2xl"}>Delivery option</Heading>
            <CiDeliveryTruck size={40} />
          </Flex>
          <Box>
            <FormControl autoComplete="off" as={"div"}>
              <Flex>
                <Box p="10px" border={"1px solid gray"} borderRadius={4}>
                  <Input
                    variant={"unstyled"}
                    border={"ActiveBorder"}
                    width={"100px"}
                    type="text"
                    placeholder="Enter pincode"
                    name="pincode"
                  />
                  <Input
                    fontWeight={800}
                    color={"#ff527b"}
                    variant={"unstyled"}
                    width={"50px"}
                    type="submit"
                    class="pincode-check pincode-button"
                    value="Check"
                  />
                </Box>
              </Flex>
            </FormControl>
            <Text as={"p"} fontWeight={500} fontSize={"sm"}>
              Please enter PIN code to check delivery time &amp; Pay on Delivery
              Availability
            </Text>
          </Box>
          <Box>
            <Text color={"gray.700"} as={"p"} fontWeight={300} fontSize={"md"}>
              100% Original Products
            </Text>
            <Text color={"gray.700"} as={"p"} fontWeight={300} fontSize={"md"}>
              Pay on delivery might be available
            </Text>
            <Text color={"gray.700"} as={"p"} fontWeight={300} fontSize={"md"}>
              Easy 14 days returns and exchanges
            </Text>
            <Text color={"gray.700"} as={"p"} fontWeight={300} fontSize={"md"}>
              Try & Buy might be available
            </Text>
          </Box>
          <Divider p={3} />
          <Box>
            <Flex gap={2}>
              <Text
                color={"gray.900"}
                as={"p"}
                fontWeight={600}
                fontSize={"xl"}
              >
                BEST OFFERS
              </Text>
              <BiPurchaseTag size={30} />
            </Flex>
          </Box>

          <Box mt={3}>
            <Text color={"gray.900"} as={"p"} fontWeight={600} fontSize={"xl"}>
              Best Price :{"849"}
            </Text>
          </Box>
          <UnorderedList textDecoration={"ButtonFace"}>
            <ListItem
              color={"gray.600"}
              as={"p"}
              fontWeight={600}
              fontSize={"sm"}
            >
              {" "}
              Applicable on: Orders above Rs. 999 (only on first purchase)
            </ListItem>
            <ListItem
              color={"gray.600"}
              as={"p"}
              fontWeight={600}
              fontSize={"sm"}
            >
              Coupon code:{" "}
              <Text fontSize={"sm"} as={"strong"}>
                MYNTRA200
              </Text>
            </ListItem>
            <ListItem
              color={"gray.600"}
              as={"p"}
              fontWeight={600}
              fontSize={"sm"}
            >
              Coupon Discount: Rs. 200 off (check cart for final savings)
            </ListItem>
          </UnorderedList>
          <Box>
            <Link to={"*"}>
              <Text color={"#ff527b"} as={"p"} fontWeight={600} fontSize={"sm"}>
                View Eligible Products
              </Text>
            </Link>
          </Box>
          <Divider />
          <Spacer />
          <Spacer />
          <Spacer />
          <Box mt={3}>
            <Heading fontWeight={600} fontSize={"2xl"}>
              Product Details{" "}
            </Heading>
            <ul>
              <li>product</li>
              <li>product</li>
              <li>product</li>
            </ul>
            {"" || (
              <List>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  Blue longline empire top
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  Ethnic motifs print
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  Mandarin collar, three-quarter, cuffed sleeves
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  Gathered or pleated detail
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  Woven cotton
                </ListItem>
                <ListItem
                  color={"gray.800"}
                  as={"h1"}
                  fontWeight={900}
                  fontSize={"2sm"}
                >
                  Size & Fit
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  The model (height 5'8) is wearing a size S
                </ListItem>
                <ListItem
                  color={"gray.800"}
                  as={"h1"}
                  fontWeight={900}
                  fontSize={"2sm"}
                >
                  Material & Care
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  100% cotton
                </ListItem>
                <ListItem
                  color={"gray.600"}
                  as={"p"}
                  fontWeight={500}
                  fontSize={"2sm"}
                >
                  Hand Wash
                </ListItem>
              </List>
            )}
          </Box>
        </Box>
      </Box>
    
    </Box>
  );
}
