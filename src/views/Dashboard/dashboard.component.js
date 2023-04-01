import { hoc } from "../../utils/hoc";
import { useDashboardProps } from "./dashboard.props";
import { Table, Pagination, Input } from "antd";

export const Dashboard = hoc(
  useDashboardProps,
  ({
    filteredData,
    data,
    loading,
    setSearch,
    search,
    current,
    columns,
    onChange,
  }) => {
    return (
      <div style={{ margin: "20px" }}>
        <Input.Search
          placeholder="Search here ..."
          value={search}
          style={{ marginBottom: "20px" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table
          dataSource={filteredData.items}
          columns={columns}
          loading={loading}
          pagination={false}
        />
        <Pagination
          style={{ marginTop: "20px" }}
          current={current}
          onChange={onChange}
          pageSize={100}
          showSizeChanger={false}
          total={!search ? data.total_count : filteredData.total_count}
        />
      </div>
    );
  }
);
