import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";
import EmployeeList from "../pages/EmployeeList";
import JobTitleList from "../pages/JobTitleList";


export default function Categories() {
  

  return (
    <div>
      <Menu inverted pointing vertical>
        <Menu.Item as={NavLink} to="/employers" name={EmployerList}>
          <Icon name="globe" />
          İşverenler
        </Menu.Item>

        <Menu.Item as={NavLink} to="/candidates" name={CandidateList}>
          <Icon name="bullhorn" />
          İş arayanlar
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employees" name={EmployeeList}>
          <Icon name="user" />
          Çalışanlar
        </Menu.Item>

        <Menu.Item as={NavLink} to={"/jobtitles"} name={JobTitleList}>
          <Icon name="group" />
          İş pozisyonları
        </Menu.Item>
      </Menu>

    </div>
  );
}
