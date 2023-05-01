import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabMenu() {
  return (
    <div className="my-24">
      <Tabs>
        <TabList>
          <Tab>
            <p className="MaisonNeueMonoRegular tracking-wider">PRODUCTS</p>
          </Tab>
          <Tab>
            <p className="MaisonNeueMonoRegular tracking-wider">USERS</p>
          </Tab>
          <Tab>
            <p className="MaisonNeueMonoRegular tracking-wider">ORDERS</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="my-20 mx-8">
            <h2 className="MaisonNeueMonoRegular tracking-widest font-bold text-2xl">
              PRODUCTS
            </h2>
            <div>{/* react table for the products */}</div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-20 mx-8">
            <h2 className="MaisonNeueMonoRegular tracking-widest font-bold text-2xl">
              USERS
            </h2>
            <div>{/* react table for the products */}</div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-20 mx-8">
            <h2 className="MaisonNeueMonoRegular tracking-widest font-bold text-2xl">
              ORDERS
            </h2>
            <div>{/* react table for the products */}</div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabMenu;
