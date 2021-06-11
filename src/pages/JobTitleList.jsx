import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitleList() {
  const [jobTitles, setjobTitles] = useState([]);

  useEffect(()=>{
      let jobTitleService = new JobTitleService()
      jobTitleService.getJobTitles().then(result=>setjobTitles(result.data.data))
  },[])

  return (
    <div>
      <Table inverted celled color="purple">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonları</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobTitles.map((jobTitle) => (
            <Table.Row>
              <Table.Cell>{jobTitle.title}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
