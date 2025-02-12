import Layout from "@/components/Layout";
import { considerationsByCategory } from "../db/considerationsByCategory";
import { dummyCategories } from "../db/dummyCategories";
import ConsiderationCard from "@/components/basics/ConsiderationCard";
import Accordion from "@/components/basics/Accordion";

import {use, useEffect, useState } from "react";


export default function ConsiderationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Array<string>>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredConsiderations, setFilteredConsiderations] = useState(considerationsByCategory);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory?.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
      return;
    }
    setSelectedCategory([...(selectedCategory || []), category]);
  };

  useEffect(() => {
    filterConsiderations();
  }, [selectedCategory]);
  
  useEffect(() => {
    filterConsiderations();
  }, [searchText]);

  const filterConsiderations = () => {
    let filteredConsiderations = considerationsByCategory().filter(
      (consideration) =>
        (selectedCategory?.length == 0 || selectedCategory?.every((item) => consideration.category.includes(item))) &&
        (searchText === "" ||
          consideration.title.toLowerCase().includes(searchText.toLowerCase()) ||
          consideration.content.toLowerCase().includes(searchText.toLowerCase())));
    setFilteredConsiderations(filteredConsiderations);
  };

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <Layout title="Considerações de Design e Avaliação">
      <div className="flex gap-3 mt-7 mb-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar"
            className="border border-gray-300 rounded-md px-2 py-1 pr-8"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg className="fill-webplat-primary-color" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.625 8.0625C14.6016 9.70312 14.1328 11.1445 13.2188 12.3867L17.6836 16.8164C17.8945 17.0508 18 17.3203 18 17.625C18 17.9297 17.8945 18.1992 17.6836 18.4336C17.4492 18.6445 17.1797 18.75 16.875 18.75C16.5703 18.75 16.3008 18.6445 16.0664 18.4336L11.6367 13.9688C10.3945 14.8828 8.95312 15.3516 7.3125 15.375C5.25 15.3281 3.52734 14.6133 2.14453 13.2305C0.761719 11.8477 0.046875 10.125 0 8.0625C0.046875 6 0.761719 4.27734 2.14453 2.89453C3.52734 1.51172 5.25 0.796875 7.3125 0.75C9.375 0.796875 11.0977 1.51172 12.4805 2.89453C13.8633 4.27734 14.5781 6 14.625 8.0625ZM7.3125 13.125C8.74219 13.0781 9.9375 12.5859 10.8984 11.6484C11.8359 10.6875 12.3281 9.49219 12.375 8.0625C12.3281 6.63281 11.8359 5.4375 10.8984 4.47656C9.9375 3.53906 8.74219 3.04687 7.3125 3C5.88281 3.04687 4.6875 3.53906 3.72656 4.47656C2.78906 5.4375 2.29688 6.63281 2.25 8.0625C2.29688 9.49219 2.78906 10.6875 3.72656 11.6484C4.6875 12.5859 5.88281 13.0781 7.3125 13.125Z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-5 mb-2">
        {dummyCategories.map((category) => (
          <button
            className={`bg-blue-500 shadow-md text-white px-3 py-1 rounded-xl ${
              selectedCategory?.includes(category)
                ? "bg-webplat-secondary-color-with-hover"
                : "bg-webplat-primary-color-with-hover"
            }`}
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Accordion
        title="Informações sobre as categorias"
        answer={`
        <div class="flex flex-col flex-wrap gap-y-1.5">
          <span>
            <strong>Entrada de dados:</strong> elementos de interação que demandam ação direta dos usuários.
          </span>
          <span>
            <strong>Saída de dados:</strong> elementos da interface apresentados aos usuários.
          </span>
          <span>
            <strong>Visual:</strong> elementos visuais da interface disponibilizados aos usuários.
          </span>
          <span>
            <strong>Áudio:</strong> elementos da interface com recursos de voz que apoiam os usuários.
          </span>
        </div>`}
      />
      <div>
        <div className="flex flex-wrap gap-3 mt-2 mb-5">
            <span className="text-sm">
              <strong>Quantidade de Considerações: </strong>{`${filteredConsiderations.length}`}
            </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 gap-4">
        {filteredConsiderations.map((consideration) => {
          return (
            <ConsiderationCard
              key={consideration.id}
              id={consideration.id}
              title={consideration.title}
              category={consideration.category}
              content={consideration.content}
            />
          );
        })}
      </div>
    </Layout>
  );
}