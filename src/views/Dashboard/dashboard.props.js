import React, { useEffect } from "react";
import getAllService from "../../services/table.service";
import useDebounce from "../../hook/useDebounce";
export const useDashboardProps = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [current, setCurrent] = React.useState(1);
  const debouncedSearchTerm = useDebounce(search, 600);

  // page changed
  const onChange = (page) => {
    setCurrent(page);
  };
  // search filtered function

  useEffect(() => {
    const filteredRedult = data.items?.filter((item) =>
      item.name?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredData({ items: filteredRedult });
  }, [debouncedSearchTerm]);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "unit",
      dataIndex: "unit",
      key: "unit",
    },
  ];

  React.useEffect(() => {
    setLoading(true);
    getAllService
      .table(current)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [current]);

  return {
    filteredData,
    data,
    loading,
    setSearch,
    search,
    current,
    columns,
    onChange,
  };
};
