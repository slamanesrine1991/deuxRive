import React, { Component ,Fragment} from 'react'
import med from '../img/sidi-bou.jpg'
import trigger from '../img/trigger.png'
import stategy from '../img/strategy.png'
import conversation from '../img/conversation.png'
import calender from '../img/calender.png'
import 'antd/dist/antd.css';
import './home.css';
import NavBar from './NavBar'
import { Row, Col } from 'antd';
export default class Home extends Component {
    render() {
        return (
          <Fragment>
            <NavBar/>
            <div className='home-page'>
      <div className='home-cover'>        
    <img src ={med} alt='med'/>
      <h1><span className='sommet'>Forum </span> <br></br>
      
      <span className ='rive'>de la méditérranée</span></h1>
      </div> 

      <div>
          <h2>
          CE QU’IL FAUT RETENIR DU SOMMET DES DEUX RIVES,
<br></br>
FORUM DE LA MÉDITERRANÉE
          </h2>
          <p className='home-paragraph'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              <br></br>doloremque laudantium, totam rem aperiam, eaque ipsa </p>

              <div className="gutter-example">
    <Row gutter={6}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
        <img src={calender} alt=''/>
        <h3>UN AGENDA POSITIF</h3>
        <p>Pour réaffirmer la dimension positive et
le potentiel de la région et mettre en
avantla complémentarité des échanges
entre le Sud et le Nord de la Méditerranée.</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
        <img src={conversation} alt=''/>
        <h3>UNE DYNAMIQUE D’INCLUSION</h3>
        <p>Pour ouvrir les échanges à tous, et en
particulier la jeunesse et ainsi dépasser
uneapprocheinstitutionnelleetfragmentée
de la coopération dans l’espace méditerranéen.</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
        <img src={stategy} alt=''/>
        <h3>UNE DEMARCHE PRAGMATIQUE</h3>
        <p>Afin de produire des résultats tangibles
fondés sur des initiatives concrètes et
rapidement actionnables.</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
        <img src={trigger} alt=''/>
        <h3>UNE NOUVELLE IMPULSION EN
MÉDITÉRRANÉE</h3>
        <p>Afin de lancer une nouvelle dynamique
de coopération centrée sur la participation
de la société civile dans le cadre des
organisations existantes.</p>
        </div>
      </Col>
    </Row>
  </div>,


      </div>
    </div>
 
 </Fragment>
           
        )
    }
}
