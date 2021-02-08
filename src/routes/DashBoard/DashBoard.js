import React from "react";
import DashSideBar from "../../components/DashBoardSidebar/DashSideBar";
import DashBoardList from "../../components/DashBoardList/DashBoardList";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <section className="dashboardPage">
      <div className="dashboardWindow">
        <DashSideBar />
        <DashBoardList />
      </div>
    </section>
  );
};

export default DashBoard;
