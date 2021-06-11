import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Icon, Menu, Table } from "semantic-ui-react";


export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisement().then((result)=> setJobAdvertisements(result.data.data))
    },[])

    return (
        <div>
            <Table inverted celled color="pink">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş İlanı Tanıtımı</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyonlar</Table.HeaderCell>
            <Table.HeaderCell>En az Maaş</Table.HeaderCell>
            <Table.HeaderCell>En çok Maaş</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row>
              <Table.Cell>{jobAdvertisement.requirement}</Table.Cell>
              <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisement.salaryMin}</Table.Cell>
              <Table.Cell>{jobAdvertisement.salaryMax}</Table.Cell>
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
    )
}
