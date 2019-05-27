import React from "react";

import { connect } from "react-redux";

import { fetchProject } from "../actions/ProjectAction";
import Projet from "./Projet";





class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchProject();
        
      }
  render() {
    const {  projects } = this.props;
console.log(projects)
    return !projects ? ("Loading"):(
      <div >
        
       
         
          <div>
            {projects.map(el => (
              <Projet projet={el} />
            ))}
          </div>
      
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    fetchProject: () => {
      dispatch(fetchProject());
    }
  });
const mapStateToProps = state => ({
 projects: state
});



export default connect( mapStateToProps,  mapDispatchToProps
    )(Dashboard);
