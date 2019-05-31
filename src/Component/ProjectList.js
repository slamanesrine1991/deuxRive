import React from 'react';
import Spinner from './spinner'
import { connect } from 'react-redux';
import { fetchProject } from '../actions/ProjectAction';
import Projet from './Projet';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchProject();
  }
  render() {
    const { projects } = this.props;

    return !projects.length>0 ? (
      <Spinner />
    ) : (
      <div>
        <div>
          {projects.map((el) => (
            <Projet projet={el} key={el._id} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
