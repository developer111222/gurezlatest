import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({inputValue,setInputValue,onchageInputValue}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [inputValue, setInputValue] = React.useState({
  //   dtype: "",
  //   camount: "",
  //   allowFreeShipping: false,
  //   couponExpiryDate: "",
  //   minimumSpend: 0,
  //   maximumSpend: 0,
  //   individualUseOnly: false,
  //   excludeSaleItems: false,
  //   products: "",
  //   excludeProducts: "",
  //   productCategories: "",
  //   excludeCategories: "",
  //   emails: "",
  //   usageLimitPerCoupon: 0,
  //   limitUsageToXItems: 0,
  //   usageLimitPerUser: 0,
  // });

  // const onchageInputValue = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   setInputValue((prevInputValue) => ({
  //     ...prevInputValue,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  //   console.log(inputValue)
  // };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        // height: 270,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="General" {...a11yProps(0)} />
        <Tab label="Usqage Restriction" {...a11yProps(1)} />
        <Tab label="Usages limits" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="tab-general">
          <div className="tab-left">
            <label>Discount Type</label>
          </div>
          <div className="tab-right">
            <select
              name="dtype"
              value={inputValue.dtype}
              onChange={onchageInputValue}
            ><option>Please Select</option>
              <option value="Percentage discount">Percentage discount</option>
              <option value="Fixed basket discount">
                Fixed basket discount
              </option>
              <option value="Fixed product discount">
                Fixed product discount
              </option>
              <option value="Discount By User">Discount By User</option>
            </select>
          </div>
        </div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Coupon Amount</label>
          </div>
          <div className="tab-right">
            <input
              type="number"
              name="camount"
              value={inputValue.camount}
              onChange={onchageInputValue}
            />
          </div>
        </div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Allow Free Shipping</label>
          </div>
          <div className="tab-right">
            <input
              type="checkbox"
              id="allowFreeShipping"
              name="allowFreeShipping"
              checked={inputValue.allowFreeShipping}
              onChange={onchageInputValue}
            />
            <span>
              Tick this box if the coupon grants free shipping. A free shipping
              method must be enabled in your shipping zone and be set to require
              "a valid free shipping coupon" (see the "Free Shipping Requires"
              setting)
            </span>
          </div>
        </div>
        <div></div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Coupon expiry date</label>
          </div>
          <div className="tab-right">
            <input type="date" name="couponExpiryDate" value={inputValue.couponExpiryDate} onChange={onchageInputValue} />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tab-general">
          <div className="tab-left">
            <label>Minimum spend</label>
          </div>
          <div className="tab-right">
            <input type="number" name="minimumSpend" value={inputValue.minimumSpend} onChange={onchageInputValue}/>
          </div>
        </div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Maximum spend</label>
          </div>
          <div className="tab-right">
            <input type="number" name="maximumSpend" value={inputValue.maximumSpend} onChange={onchageInputValue}/>
          </div>
        </div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Individual use only</label>
          </div>
          <div className="tab-right">
            <input type="checkbox" id="individualUseOnly" name="individualUseOnly" value={inputValue.individualUseOnly} onChange={onchageInputValue} />
            <span>
              Tick this box if the coupon cannot be used in conjunction with
              other coupons.
            </span>
          </div>
        </div>
        <div></div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Exclude sale items</label>
          </div>
          <div className="tab-right">
            <input type="checkbox" id="excludeSaleItems" name="excludeSaleItems" value={inputValue.excludeSaleItems} onChange={onchageInputValue} />
            <span>
              Tick this box if the coupon should not apply to items on sale.
              Per-item coupons will only work if the item is not on sale.
              Per-basket coupons will only work if there are items in the basket
              that are not on sale.
            </span>
          </div>
        </div>
        <div></div>

        {/* products  backend call */}

        <div className="tab-general">
          <div className="tab-left">
            <label>Products</label>
          </div>
          <div className="tab-right">
            <input type="search"  name="products" value={inputValue.products} onChange={onchageInputValue}/>
          </div>
        </div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Exclude Products</label>
          </div>
          <div className="tab-right">
            <input type="search" name="excludeProducts" value={inputValue.excludeProducts} onChange={onchageInputValue}/>
          </div>
        </div>
        {/* products  backend call */}

        <div className="tab-general">
          <div className="tab-left">
            <label>Products Categories</label>
          </div>
          <div className="tab-right">
            <input type="search" name="productCategories" value={inputValue.productCategories} onChange={onchageInputValue}/>
          </div>
        </div>
        <div className="tab-general">
          <div className="tab-left">
            <label>Exclude Categories</label>
          </div>
          <div className="tab-right">
            <input type="search" name="excludeCategories" value={inputValue.excludeCategories} onChange={onchageInputValue}/>
          </div>
        </div>
        {/* Allowed email */}

        <div className="tab-general">
          <div className="tab-left">
            <label>Emails</label>
          </div>
          <div className="tab-right">
            <input type="email" name="emails" value={inputValue.emails} onChange={onchageInputValue}/>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="tab-general">
          <div className="tab-left">
            <label>Usage limit per coupon</label>
          </div>
          <div className="tab-right">
            <input type="number" name="usageLimitPerCoupon" value={inputValue.usageLimitPerCoupon} onChange={onchageInputValue} />
          </div>
        </div>

        <div className="tab-general">
          <div className="tab-left">
            <label>Limit usage to X items</label>
          </div>
          <div className="tab-right">
            <input type="number" name="limitUsageToXItems" value={inputValue.limitUsageToXItems} onChange={onchageInputValue}/>
          </div>
        </div>

        <div className="tab-general">
          <div className="tab-left">
            <label>Usage limit per user</label>
          </div>
          <div className="tab-right">
            <input type="number" name="usageLimitPerUser" value={inputValue.usageLimitPerUser} onChange={onchageInputValue}/>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
