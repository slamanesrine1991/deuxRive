import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProjects } from "../../actions/projectsAction";
import { Input } from "antd";
import "antd/dist/antd.css";
import { Avatar, Icon, Button , Col, Row  } from "antd";
import OverflowText from './showMore';
import { Layout, Menu } from "antd";
import { List , Checkbox ,} from 'antd';
import NavBar from "./NavBar";
// import ReactTextMoreLess from "react-text-more-less";
import Spinner from "./spinner";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Search = Input.Search;
const thematics = [
  'Culture',
  'Tourisme',
  'Media',
  'Environnement et développement durable',
  'Economie et compétitivité',
  'Jeunesse, éducation et mobilité'
];
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

const mapDispatchToProps = dispatch => ({
  getProjects: () => {
    dispatch(getProjects());
  }
});
const mapStateToProps = state => ({
  projects: state.project.projects
});

const IconText = ({ type, text, size = "25px" }) => (
  <span>
    <span style={{ fontSize: "18px" }}> {text}</span>
    <Icon
      type={type}
      style={{ marginRight: 8 }}
      style={{ fontSize: size, color: "#08c" }}
    />
  </span>
);

class ListProjects extends React.Component {
  state = {
    collapsed: true,
    search: ''
  };
  searchValue = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };
  handleReflow = rleState => {
    const { clamped, text } = rleState;
    // do sth...
  };
  componentDidMount() {
    this.props.getProjects();
  }
  data = x => {
    console.log(x, 'xx');

    const projects = [];
    const inComeData = !x ? [] : x;
    for (let i = 0; i < inComeData.length; i++) {
      projects.push({
        title: <h2>{inComeData[i].title}</h2>,
        country: inComeData[i].country,
        organizer: inComeData[i].organizer,
        thematic: inComeData[i].thematic,
        document: inComeData[i].document,
        description: inComeData[i].description
      });
    }
    return projects;
  };

  render() {
    const { projects } = this.props;

    return (
      <Fragment>
        <NavBar/>
      <div>
        <Layout>
          <Layout>
            <Sider width={250} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Search
                  placeholder="SEARCH"
                  onChange={this.searchValue}
                  style={{
                    marginLeft: '20px',
                    width: '90%',
                    marginBottom: '10px'
                  }}                />

                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="setting" />
                      Thématique
                    </span>
                  }
                >
                  {thematics.map((el, i) => (
                    <Menu.Item key={i + 1}>
                      <Checkbox onChange={this.onChange}>{el}</Checkbox>
                    </Menu.Item>
                  ))}
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
                  {countries.map((el, i) => (
                    <Menu.Item key={i + 1}>
                      <Checkbox onChange={this.onChange}>{el.name}</Checkbox>
                    </Menu.Item>
                  ))}
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
              <Row>
                <Col span={21}>
                  {!projects.length > 0 ? (
                    <Spinner />
                  ) : (
                    <div className="projectsList">
                      <List
                        itemLayout="vertical"
                        size="large"
                        bordered
                        pagination={{
                          onChange: page => {
                            console.log(page);
                          },
                          pageSize: 10
                        }}
                        dataSource={projects.filter(item =>
                          item.title.toLowerCase().includes(this.state.search)
                        )}
                        renderItem={item => (
                          <List.Item
                            bordered
                            key={item.title}
                            className="project-card"
                          >
                            <List.Item.Meta
                              title={
                                <div className="projectHeader">
                                  {item.title}
                                  {
                                    <p className="thematique-header">
                                      {item.thematic}
                                    </p>
                                  }
                                </div>
                              }
                              description={
                                <div className="thematic">
                                  {item.organizer}, {item.country}
                                </div>
                              }
                            />
                            {
                              <div className="description">
                                <OverflowText item={item.description} />
                              </div>
                            }
                            {item.document ? (
                              <a
                                href={`http://localhost:5000${item.document}`}
                                target="_blank"
                              >
                                <IconText
                                  type="download"
                                  text="TELECHARGER LE DOCUMENT EN PDF"
                                  size="16px"
                                />
                              </a>
                            ) : null}
                          </List.Item>
                        )}
                      />
                    </div>
                  )}
                </Col>
                <Col span={3} />
              </Row>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProjects);
