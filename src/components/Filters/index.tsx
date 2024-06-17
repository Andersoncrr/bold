"use client";

import { FILTERS_DAYS, FILTERS_OPTIONS } from "@/const/filters";
import { ChangeEvent, useState } from "react";
import { FilterOptions } from "@/types/filters";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import "./styles/filters.scss";

export const Filters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const allSearch = searchParams.get("all");
  const all = allSearch === "true";

  const dataphoneChargeSearch = searchParams.get("dataphoneCharge");
  const dataphoneCharge = dataphoneChargeSearch === "true";

  const linkChargeSearch = searchParams.get("linkCharge");
  const linkCharge = linkChargeSearch === "true";

  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    isOpen: false,
    options: {
      dataphoneCharge,
      linkCharge,
      all,
    },
  });

  const handleFilterClick = (filterId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("day", filterId);
    replace(`${pathname}?${params.toString()}`);
  };

  const toggleFilterOptions = () => {
    setFilterOptions({ ...filterOptions, isOpen: !filterOptions.isOpen });
  };

  const selectFilterOptions = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilterOptions({
      ...filterOptions,
      options: {
        ...filterOptions.options,
        [name]: checked,
      },
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

    for (const option in filterOptions.options) {
      params.set(option, filterOptions.options[option].toString());
    }

    replace(`${pathname}?${params.toString()}`);
    setFilterOptions({ ...filterOptions, isOpen: false });
  };

  return (
    <article className="filter">
      <ul className="filter__days">
        {FILTERS_DAYS.map((day) => (
          <li
            className={`filter__day ${
              searchParams.get("day") === day.id ? "filter__day--select" : ""
            }`}
            onClick={() => handleFilterClick(day.id)}
            key={day.id}
          >
            {day.name}
          </li>
        ))}
      </ul>

      <div className="filter__options">
        <div className="filter__options-container">
          <div className="filter__options-button" onClick={toggleFilterOptions}>
            <span>FILTRAR</span>
          </div>
          {filterOptions.isOpen ? (
            <Image
              className="filter__options-icon"
              src="/close.svg"
              width={25}
              height={25}
              alt="close"
              onClick={toggleFilterOptions}
            />
          ) : (
            <Image
              className="filter__options-icon"
              src="/filter.svg"
              width={25}
              height={25}
              alt="filter"
              onClick={toggleFilterOptions}
            />
          )}

          <div
            className={`filter__options-dropdown ${
              filterOptions.isOpen ? "is-open" : ""
            }`}
          >
            <ul className="filter__options-list">
              {FILTERS_OPTIONS.map((option) => (
                <li key={option.id} className="filter__options-item">
                  <input
                    type="checkbox"
                    name={option.id}
                    className="filter__options-checkbox"
                    onChange={selectFilterOptions}
                    checked={filterOptions.options[option.id]}
                    data-testid={option.id}
                  />
                  {option.name}
                </li>
              ))}
            </ul>
            <div className="filter__options-apply">
              <button onClick={applyFilters}>Aplicar</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
