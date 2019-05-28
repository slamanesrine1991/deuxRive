
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar, Icon,Button } from 'antd';


const listData = [];
for (let i = 0; i < 20; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design',
    content:
   <div style = {{display : 'flex',flexDirection :'column'}}>
      <p style = {{flex : 10}}>'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help peoplWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help peoplto help people create their product prototypes beautifully and efficiently.'</p>  
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
class ProjetAnt extends React.Component{
render(){

return(
  <List
    itemLayout="vertical"
    size="large"
    bordered
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> 
      </div>
    }
    
    renderItem={item => (
      <List.Item
      bordered
        key={item.title}
        actions={[
     
          <IconText type="download" text="document du projet "size = "32px" />,
      
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
          title={<a href={item.href}>{item.title}</a>}
          description={<div><div>{item.description}, {item.description}</div></div>}
        />
        {item.content}
      </List.Item>
    )}
  />
)
      }
      }
      export default ProjetAnt;
