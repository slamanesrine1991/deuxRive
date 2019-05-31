import React from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Menu,
  Icon,
  Col,
  Row,
  List,
  Input,
  Avatar,
  Checkbox
} from 'antd';
import 'antd/dist/antd.css';
import MediaControlCard from './centCard';
import { getCent } from '../actions/centActions';
import Spinner from './spinner';

const Search = Input.Search;

const countries = [
  {
    name: 'Espagne',
    flag: 'https://cdn.countryflags.com/thumbs/spain/flag-square-250.png'
  },
  {
    name: 'France',
    flag: 'https://cdn.countryflags.com/thumbs/france/flag-square-250.png'
  },
  {
    name: 'Italie',
    flag: 'https://cdn.countryflags.com/thumbs/italy/flag-square-250.png'
  },
  {
    name: 'Malte',
    flag: 'https://cdn.countryflags.com/thumbs/malta/flag-square-250.png'
  },
  {
    name: 'Portugal',
    flag: 'https://cdn.countryflags.com/thumbs/portugal/flag-square-250.png'
  },
  {
    name: 'Algérie',
    flag: 'https://cdn.countryflags.com/thumbs/algeria/flag-square-250.png'
  },
  {
    name: 'Libye',
    flag: 'https://cdn.countryflags.com/thumbs/libya/flag-square-250.png'
  },
  {
    name: 'Mauritanie',
    flag: 'https://cdn.countryflags.com/thumbs/mauritania/flag-square-250.png'
  },
  {
    name: 'Tunisie',
    flag: 'https://cdn.countryflags.com/thumbs/tunisia/flag-square-250.png'
  },
  {
    name: 'Maroc',
    flag: 'https://cdn.countryflags.com/thumbs/morocco/flag-square-250.png'
  }
];
class Cent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chef: false,
      search: ''
    };
  }
  componentDidMount() {
    this.props.getCent();
  }
  onChange = e => {
    this.setState({
      chef: e.target.checked
    });
  };
  searchValue = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };
  render() {
    const { SubMenu } = Menu;
    const { cent } = this.props;
    const { Content, Sider } = Layout;
    return (
      <div>
        <Layout>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultScountryectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Search
                  placeholder="SEARCH"
                  onChange={this.searchValue}
                  style={{
                    marginLeft: '20px',
                    width: '168px',
                    marginBottom: '10px'
                  }}
                />
                <Menu.Item key="0">
                  <Icon type="user" />
                  <Checkbox onChange={this.onChange}>Chef de file</Checkbox>
                </Menu.Item>

                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="flag" />
                      Pays
                    </span>
                  }
                >
                  {countries.map((el, i) => (
                    <Menu.Item key={i + 1}>
                      <Checkbox onChange={this.onChange}>{el.name}</Checkbox>
                    </Menu.Item>
                  ))}
                </SubMenu>
              </Menu>
            </Sider>

            <Layout style={{ padding: '0 24px 24px' }}>
              <Row >
                <Col span={21}>
                  {!cent.length > 0 ? (
                    <Spinner />
                  ) : (
                    <Content
                      style={{
                        background: '#fff',
                        margin: 0,
                        minWidth: 'fit-content'
                      }}
                    >
                      {/* this is where we're filtering the countries without data and without matching names (while searching) */}
                      {countries
                        .filter(
                          country =>
                            cent.filter(
                              item =>
                                item.country.toLowerCase() ===
                                  country.name.toLowerCase() &&
                                item.name
                                  .toLowerCase()
                                  .includes(this.state.search)
                            ).length > 0
                        )
                        .map((country, i) => (
                          <div key={i} style={{ marginBottom: '20px' }}>
                            <div className="country">
                              <Avatar
                                src={country.flag}
                                className="flag-avatar"
                                size="small"
                              />
                              <h2>{country.name.toUpperCase()}</h2>
                            </div>
                            <List
                              grid={{
                                gutter: 16
                              }}
                            //   style={{ border:'1px solid black', display:"flex", justifyContent:"center"}}

                            //   this is where we're passing, mapping and filtering the list of 'cent' (in dataSource)
                              dataSource={cent
                                .filter(
                                  item =>
                                    item.country.toLowerCase() ===
                                      country.name.toLowerCase() &&
                                    item.name
                                      .toLowerCase()
                                      .includes(this.state.search)
                                )
                                .filter(el => {
                                  return this.state.chef
                                    ? el.chief === 'true'
                                    : el;
                                })}
                              renderItem={item => (
                                <List.Item
                                  className={
                                    item.chief === 'true'
                                      ? 'ant-col-xxl-22'
                                      : 'ant-col-xxl-11'
                                  }
                                  style={{
                                    padding: '0 8px'
                                  }}
                                >
                                  <MediaControlCard item={item} />
                                </List.Item>
                              )}
                            />
                          </div>
                        ))}
                    </Content>
                  )}
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
