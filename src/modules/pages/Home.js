'use client';
import { useState, useEffect } from "react";
import { Layout, Space, Col, Row, Modal, Input, Select, Pagination } from 'antd';
import PokemonCard from '../components/Card/PokemonCard';
import PokemonCardDetail from '../components/Card/PokemonCardDetail';
const { Header, Footer, Content } = Layout;

const tagData = ["grass", "poison", "fire", "flying", "dragon", "water", "bug", "normal", "dark", "electric", "psychic", "ice", "steel", "ground", "fairy", "fighting", "rock"]
export default function Dashboard(props) {
    // console.log("data", props)

    // const filteredData = (props.data || []).filter((value, index, self) => 
    //     self.findIndex(v => v.number === value.number) === index
    //     ) || [];

    const { Search } = Input;

    const [data, setData] = useState((props.data || []).filter((value, index, self) => 
    self.findIndex(v => v.number === value.number) === index
    ) || []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isData, setIsData] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [current, setCurrent] = useState(1);
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
      if(props.data){
        setTotalPage(props.data.length / pageSize)
        setMinIndex(0)
        setMaxIndex(pageSize)
      }
    },[pageSize])


    const showModal = (row) => {
      setIsModalOpen(true);
      setIsData(row);
    };
    const handleOk = () => {
      setIsModalOpen(false);
      setIsData(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
      setIsData(false);
    };

    const handleChange = (page) => {

      setCurrent(page)
        setMinIndex((page - 1) * pageSize)
        setMaxIndex(page * pageSize)
    };

    const onSearch = (value) => { 
      const searchTerm = value.toLowerCase()
      let filteredData = props.data.filter(value => {
          return value.name.toLowerCase().match(new RegExp(searchTerm, 'g'))
      })
      setData(filteredData)
      setCurrent(1)
      setTotalPage(filteredData.length / pageSize)
      setMinIndex(0)
      setMaxIndex(pageSize)
    };

    const handleSelect = (select) => {
      
      let filteredData = props.data.filter(value => {
          return value.type.includes(select)
      })
      setData(filteredData)
      setCurrent(1)
      setTotalPage(filteredData.length / pageSize)
      setMinIndex(0)
      setMaxIndex(pageSize)
    }


    return (
    <Space
        direction="vertical"
        style={{
        width: '100%',
        height: '100%'
        }}
        size={[0, 48]}
      >
      <Layout>
        <Header style={headerStyle}>
          <Row gutter={[20, 20]} justify="center" className="mt20">
            
            <Col>
              <Select
                style={{
                  width: 200,
                }}
                placeholder="Select tag"
                onChange={(value) =>handleSelect(value)}
                options={tagData.map((tags) => ({
                  label: tags,
                  value: tags,
                }))}
              />
            </Col>
            <Col>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={(value) => onSearch(value)}
              />
            </Col>
            <Col>
              <Pagination
                pageSize={pageSize}
                pageSizeOptions={[10, 20, 50]}
                onShowSizeChange={(current, size) => setPageSize(size)}
                current={current}
                total={data.length}
                onChange={handleChange}
                style={{ bottom: "0px" }}
              />
            </Col>
          </Row>
        </Header>
        <Content style={contentStyle}>
            <Row gutter={[20, 20]} justify="center" className="mt20">
            {data.length > 0 && data.map((row, index) =>
              index >= minIndex &&
              index < maxIndex && (
                <Col key={index}><a onClick={() => showModal(row)}><PokemonCard {...row} /></a></Col>
            ))}
            </Row>
            {isData && 
                <Modal title={isData.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <PokemonCardDetail {...isData} />
                </Modal>
            }
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
    )
}

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  const contentStyle = {
    textAlign: 'center',
    maxHeight: 700,
    // lineHeight: '700px',
    // color: '#fff',
    // backgroundColor: '#108ee9',
  };
  const footerStyle = {
    textAlign: 'center',
    // color: '#fff',
    // backgroundColor: '#7dbcea',
  };