import React from "react";
import { connect } from "react-redux";
import { fetchProject } from "../actions/ProjectAction";
import Projet from "./Projet";
import 'antd/dist/antd.css';
import { List, Avatar, Icon,Button } from 'antd';
import { Layout, Menu} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const mapDispatchToProps = dispatch => ({
    fetchProject: () => {
      dispatch(fetchProject());
    }
  });
const mapStateToProps = state => ({
 projects: state
});


const projects = [];
for (let i = 0; i < 20; i++) {
  projects.push({
    
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    country:'tunisie',
      organizer:'assosiation',
      thematic:'energinitique',
      description:
   <div style = {{display : 'flex',flexDirection :'column'}}>
      <p style = {{flex : 10}}>'We supply a series of design principlely and efficiently.'</p>  
     <div style = {{flex :2 , margin : 10, display : 'flex',alignItem:"flexEnd" }}> 

 </div>
  </div>,
  });
}
const IconText = ({ type, text,size="25px"  }) => (
    <span>
       <span style = {{fontSize :"18px"}}> {text}</span>
      <Icon type={type} style={{ marginRight: 8 }} style={{ fontSize: size, color: '#08c' }} />
    
    </span>
  );


class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchProject();
        
      }
  render() {
    const {  projects } = this.props;

    return !projects ? ("Loading"):(
      <div >
 <Layout>
   
   <Layout>
     <Sider width={200} style={{ background: '#fff' }}>
       <Menu
         mode="inline"
         defaultSelectedKeys={['1']}
         defaultOpenKeys={['sub1']}
         style={{ height: '100%', borderRight: 0 }}
       >
         <SubMenu
           key="sub1"
           title={
             <span>
               <Icon type="user" />
               subnav 1
             </span>
           }
         >
           <Menu.Item key="1">option1</Menu.Item>
           <Menu.Item key="2">option2</Menu.Item>
           <Menu.Item key="3">option3</Menu.Item>
           <Menu.Item key="4">option4</Menu.Item>
         </SubMenu>
         <SubMenu
           key="sub2"
           title={
             <span>
               <Icon type="laptop" />
               subnav 2
             </span>
           }
         >
           <Menu.Item key="5">option5</Menu.Item>
           <Menu.Item key="6">option6</Menu.Item>
           <Menu.Item key="7">option7</Menu.Item>
           <Menu.Item key="8">option8</Menu.Item>
         </SubMenu>
         <SubMenu
           key="sub3"
           title={
             <span>
               <Icon type="notification" />
               subnav 3
             </span>
           }
         >
           <Menu.Item key="9">option9</Menu.Item>
           <Menu.Item key="10">option10</Menu.Item>
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
       <div className='projectsList'>
<List
    itemLayout="vertical"
    size="large"
    bordered
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={projects}
    footer={
      <div>
        {/* <b>ant design</b>  */}
      </div>
    }
    
    renderItem={item => (
      <List.Item
      bordered
        key={item.title}
        actions={[
    
          <IconText type="download" text="TELECHARGER LE DOCUMENT EN PDF"size = "16px" />,
      
        ]}
        // extra={
        //   <img
        //     width={272}
        //     alt="logo"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //   />
        // }
      >
        <List.Item.Meta 
          avatar={<Avatar src={item.avatar} />}
         
          title={item.title}
           description={<div className='thematic'>{item.organizer}, {item.thematic}</div>}
        />
       {<p>{item.country}</p>}
      {<div>  {item.description}</div> }
      </List.Item>
    )}
  />

<span class="flag-icon-012 flag-icon-gr">hello</span>
<span class="flag-icon flag-icon-gr flag-icon-squared"></span>
      </div>
     </Layout>
   </Layout>
 </Layout>,
     
      </div>
    );
  }
}
export default connect( mapStateToProps,  mapDispatchToProps
    )(Dashboard);
