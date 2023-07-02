import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  const [dolls, setDolls] = useState([]);

  useEffect(() => {
    fetch("https://dreamy-dolls-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setDolls(data));
  }, []);

  const babyDolls = dolls.filter((doll) => doll.category === "Baby Dolls");
  const barbies = dolls.filter((doll) => doll.category === "Barbie");
  const americans = dolls.filter((doll) => doll.category === "American Girl");

  return (
    <div className="container  mx-auto my-12">
      <h1 className="text-center text-4xl font-bold text-purple-500">
        Shop By Category
      </h1>
      <Tabs className="text-center">
        <TabList className="text-center text-2xl mb-10  py-6">
          <Tab className="btn btn-primary mr-3 btn-sm font-semibold  hover:text-white ">
            Baby Dolls
          </Tab>
          <Tab className="btn btn-primary btn-sm mr-3 font-semibold  hover:text-white ">
            Barbie
          </Tab>
          <Tab className="btn btn-primary btn-sm ms-3 font-semibold  hover:text-white ">
            American girl
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {babyDolls.map((doll) => (
              <ShopByCategoryCard
                key={doll._id}
                doll={doll}
              ></ShopByCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {barbies.map((doll) => (
              <ShopByCategoryCard
                key={doll._id}
                doll={doll}
              ></ShopByCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {americans.map((doll) => (
              <ShopByCategoryCard
                key={doll._id}
                doll={doll}
              ></ShopByCategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
