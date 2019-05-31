import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions/ProjectAction';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Button } from 'antd';
import { Layout, Menu } from 'antd';
import ReactTextMoreLess from 'react-text-more-less';
import Spinner from './spinner'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Search = Input.Search;

const mapDispatchToProps = dispatch => ({
  fetchProject: () => {
    dispatch(fetchProject());
  }
});
const mapStateToProps = state => ({
  projects: state.projectReducer
});

// const projects = [];
// for (let i = 0; i < 20; i++) {
//   projects.filter(x => x.title.toLowerCase().includes( this.state.value)).push({

//     title: <h2>`ant design part ${i}`</h2>,
//     // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     country:'tunisie',
//       organizer:'assosiation',
//       thematic:'energinitique',
//       document:'pdf',
//       description:
//    <div style = {{display : 'flex',flexDirection :'column'}}>
//       <p style = {{flex : 10}}>'We supply a series of design principlely and efficiently.'</p>
//      <div style = {{flex :2 , margin : 10, display : 'flex',alignItem:"flexEnd" }}>

//  </div>
//   </div>,
//   })
// }
const IconText = ({ type, text, size = '25px' }) => (
  <span>
    <span style={{ fontSize: '18px' }}> {text}</span>
    <Icon
      type={type}
      style={{ marginRight: 8 }}
      style={{ fontSize: size, color: '#08c' }}
    />
  </span>
);

class Dashboard extends React.Component {
  state = {
    collapsed: true,
    value: ''
  };
  searchValue = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleReflow = rleState => {
    const { clamped, text } = rleState;
    // do sth...
  };
  componentDidMount() {
    this.props.fetchProject();
  }
  data = x => {
    console.log(x, 'xx');

    const projects = [];
    const inComeData = !x ? [] : x;
    for (let i = 0; i < inComeData.length; i++) {
      projects.push({
        title: <h2>{inComeData[i].title}</h2>,
        // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
    const { collapsed } = this.state;
  
    return !projects.length>0 ? (
      <Spinner />
    ) : (
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
                {/* <SubMenu
           key="sub1"
           title={
             <span>
               <Icon type="search" />
               Recherche
             </span>
           }
         > */}
                <Search
                  placeholder="SEARCH"
                  onChange={this.searchValue}
                  style={{ marginLeft: '20px', width: '168px' }}
                />
                {/* </SubMenu> */}

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
            <Layout style={{ padding: '0 24px 24px' }}>
              {/* <Content
         style={{
           background: '#fff',
           padding: 24,
           margin: 0,
           minHeight: 280,
         }}
       >
         Content
       </Content> */}
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
                  dataSource={this.data(projects)}
                  footer={<div>{/* <b>ant design</b>  */}</div>}
                  renderItem={item => (
                    <List.Item
                      bordered
                      key={item.title}
                      actions={
                        [
                          // <IconText type="download" text="TELECHARGER LE DOCUMENT EN PDF"size = "16px" />,
                        ]
                      }
                    >
                      <List.Item.Meta
                        // avatar={<Avatar src={item.avatar} />}

                        title={
                          <div className="projectHeader">
                            {item.title}
                            {
                              <p className="thematiqueHeader">
                                {item.thematic}
                              </p>
                            }
                          </div>
                        }
                        description={
                          <div className="thematic">
                            {item.organizer}, {item.country}{' '}
                          </div>
                        }
                      />

                      {
                        <div className="description">
                          <ReactTextMoreLess
                            collapsed={collapsed}
                            text={item.description}
                            lessHeight={100}
                            showMoreText="... Lire la suite"
                            showMoreElement={
                              <Button className="lire-la-suite">
                                Lire la suite
                                <Icon type="right" />
                              </Button>
                            }
                            showLessElement={
                              <span className="show-more-text">...</span>
                            }
                            onClick={() => {
                              this.setState({ collapsed: !collapsed });
                            }}
                          />
                        </div>
                      }
                      {/* {`http://localhost:5000/${item.document}`}  */}
                      <a download={item.document} href="#">
                        <IconText
                          type="download"
                          text="TELECHARGER LE DOCUMENT EN PDF"
                          size="16px"
                        />
                      </a>
                    </List.Item>
                  )}
                />
              </div>
            </Layout>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
