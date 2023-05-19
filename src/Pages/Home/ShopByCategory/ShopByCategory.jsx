import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  const [dolls, setDolls] = useState([]);
  const [active, setActive] = useState(" ");
  console.log(dolls);
  useEffect(() => {
    fetch(`http://localhost:5000/all-toys/${active}`)
      .then((res) => res.json())
      .then((data) => setDolls(data));
  }, [active]);

  const handleTabClick = (tabName) => {
    setActive(tabName);
    /*    alert("wow worked") */
  };

  return (
    <div className="container  mx-auto my-12">
      <h1 className="text-center text-5xl font-bold text-purple-500">
        Shop By Category
      </h1>
      <Tabs className="text-center">
        <TabList className="text-center text-2xl mb-10 underline py-6">
          <Tab onClick={() => handleTabClick("babyDolls")}>Baby Dolls</Tab>
          <Tab onClick={() => handleTabClick("barbie")}>barbie</Tab>
          <Tab onClick={() => handleTabClick("americanGirl")}>
            American girl
          </Tab>
        </TabList>

        {/* <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel> */}

        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dolls.map((doll) => (
              <ShopByCategoryCard
                key={doll.key}
                doll={doll}
              ></ShopByCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h1>hello</h1>
        </TabPanel>
        <TabPanel>
          <h1>hello</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
