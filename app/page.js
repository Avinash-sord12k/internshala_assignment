"use client";
import { useState } from "react";
import { Footer, Header, SecondaryNavBar, Sidebar, Card, Alert, Table, Pagination, CountrySelection } from "@/components"
import getCardsData from "@/components/data/getCardsData";
import getCountriesData from "@/components/data/getCountriesData";


export default function Home() {
  const cardsData = getCardsData();
  const countriesData = getCountriesData();
  const [formData, setFormData] = useState({
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    item7: "",
  });
  const handleTextInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <>
      <Header />
      <main className="flex items-start w-full bg-gray-100 text-black">
        <Sidebar />
        <div className="bg-gray-100 flex-1">
          <SecondaryNavBar />
          <div className="w-full flex items-center gap-6 px-6 mt-6">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <div className="w-full mt-6 px-6">
            <div className="w-full bg-white p-6">
              <h2 className="font-semibold text-lg">Form title</h2>
              <p className=" font-normal text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis.</p>
              <Alert />
              <Table />
              <Pagination start={4} end={4 + 5} />
            </div>
          </div>
          <div className="w-full mt-6 px-6">
            <div className="w-full bg-white p-6">
              <h2 className="font-semibold text-lg">Form title</h2>
              <p className=" font-normal text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perspiciatis.</p>
              <CountrySelection countries={countriesData}/>
              <form className="w-full mt-4">
                <div className="w-full">
                  <label htmlFor="item1" className="text-gray-600 text-base font-thin capitalize">label title</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2 " name="item1" placeholder="placeholder content" value={formData.item1} onChange={handleTextInputChange}/>
                </div>
                <div className="w-full flex gap-4 mt-4">
                  <div className="w-full">
                    <label htmlFor="item2" className="text-gray-600 text-base font-thin capitalize">label title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 " name="item2" placeholder="placeholder content" value={formData.item2} onChange={handleTextInputChange}/>
                  </div>
                  <div className="w-full">
                    <label htmlFor="item3" className="text-gray-600 text-base font-thin capitalize">label title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 " name="item3" placeholder="placeholder content"value={formData.item3} onChange={handleTextInputChange}/>
                  </div>
                  <div className="w-full">
                    <label htmlFor="item4" className="text-gray-600 text-base font-thin capitalize">label title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 " name="item4" placeholder="placeholder content" value={formData.item4} onChange={handleTextInputChange}/>
                  </div>
                </div>
                <div className="w-full flex gap-4 mt-4">
                  <div className="w-full">
                    <label htmlFor="item5" className="text-gray-600 text-base font-thin capitalize">label title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 " name="item5" placeholder="placeholder content" value={formData.item5} onChange={handleTextInputChange}/>
                  </div>
                  <div className="w-full">
                    <label htmlFor="item6" className="text-gray-600 text-base font-thin capitalize">label title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 " name="item6" placeholder="placeholder content" value={formData.item6} onChange={handleTextInputChange}/>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="item7" className="text-gray-600 text-base font-thin capitalize">label title</label>
                  <textarea name="item7" placeholder="placeholder content" rows={5} 
                  className="w-full block border border-gray-300 rounded-md p-2 " value={formData.item7} onChange={handleTextInputChange}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
