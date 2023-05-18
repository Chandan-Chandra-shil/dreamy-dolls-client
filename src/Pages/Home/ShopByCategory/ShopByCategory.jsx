
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [dolls, setZDolls] = useState([])
  const [active,setActive] = useState("")
  console.log(dolls)
  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then(res => res.json())
    .then(data=>setZDolls(data))
  },[])

  const handleTapClick = (tamName) => {
    setActive(tamName)
  }

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-center text-5xl text-purple-100">Shop By Category</h1>
      <Tabs className="text-center">
        <TabList className="text-center mb-10">
          <Tab onClick={handleTapClick}>Baby Dolls</Tab>
          <Tab>barbie</Tab>
          <Tab>American girl</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;