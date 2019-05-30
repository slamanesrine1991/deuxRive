import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Card, Icon, Col, Row, List, Typography, Input } from 'antd';
import 'antd/dist/antd.css';
import MediaControlCard from './centCard';
import { getCent } from '../actions/centActions';
const Search = Input.Search;


const { Meta } = Card;
const countries = [
  'Espagne',
  'France',
  'Italie',
  'Malte',
  'Portugal',
  'Algérie',
  'Libye',
  'Mauritanie',
  'Tunisie',
  'Maroc'
];
class Cent extends React.Component {
  componentDidMount() {
    this.props.getCent();
  }
  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    const { Title } = Typography;
    return (
      <div>
        <Layout>
          <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Search
                  placeholder="SEARCH"
                  onChange={this.searchValue}
                  style={{ marginLeft: '20px', width: '168px' }}
                />
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="setting" />
                      Thématique
                    </span>
                  }
                >
                  <Menu.Item key="5">Energitique</Menu.Item>
                  <Menu.Item key="6">Mecanique</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="flag" />
                      Pays
                    </span>
                  }
                >
                  <Menu.Item key="9">Tunisie</Menu.Item>
                  <Menu.Item key="10">France</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
        
            
            <Layout style={{ padding: '24px 24px' }}>
              <Row>
                <Col span={21}>
                  <Content
                    style={{
                      background: '#fff',
                      padding: '40px 80px',
                      margin: 0,
                      minHeight: 280,
                      minWidth: 'fit-content'
                    }}
                  >
                    {countries.map((el, i) => (
                      <div key={i}>
                        <Title>{el}</Title>
                        <List
                          grid={{
                            gutter: 16,
                            // xs: 1,
                            // sm: 1,
                            // md: 1,
                            // lg: 1,
                            // xl: 1,
                            // xxl: (item.chief) ? 1 : 2
                          }}
                          dataSource={this.props.cent.filter(item=>item.country.toLowerCase()===el.toLowerCase())}
                          renderItem={(item) => 
                            (  
                              //  <div  className= {item.chief ? 'full' : 'half'}>
                            <List.Item
                              style={{
                                display: item.chief === "true" ? "block" : 'flex',
                                flexWrap: "wrap",
                                width: item.chief === "true" ? "100%" : "50%"
                              }}
                            >
                              <MediaControlCard item={item}  />
                           
                            </List.Item>
                              //  </div>
                          )}
                        />
                      </div>
                    ))}
                    <div style={{ padding: '30px' }}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={
                          <img
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                          />
                        }
                      >
                        <Meta
                          title="Europe Street beat"
                          description="We supply a series of design principles, practical
                        patterns and high quality design resources (Sketch and
                        Axure), to help people create their product prototypes
                        beautifully and efficiently."
                        />
                      </Card>
                    </div>
                  </Content>
                </Col>
                <Col span={3} />
              </Row>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cent: state.centReducer
});
const mapDispatchToProps = dispatch => ({
  getCent: () => {
    dispatch(getCent());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cent);
