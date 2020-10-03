import React, { Component } from 'react'
import { connect } from "react-redux";

import { loadData } from "store/actions/data";
import Allrecipes from "assets/images/allrecipes.png";

import Swipers from "components/swiper";

class LandingPages extends Component {

  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount(){
    window.title = "Recipes";
    window.scrollTo(0,0);

    if (!this.props.data.data)
      this.props.loadData(
        `/`, 
        'data'
      );
  }

  render() {
    const { data } = this.props;

    console.log(data);

    if (!data.hasOwnProperty("data")) return null;

    return (
      <div className="main">
        <div className="header">
          {/* <h3>allrecipes </h3> */}
          <img className="logo" src={Allrecipes} alt="logo-recipes"/>
          <h5>What do you want to eat today?</h5>
        </div>
        <Swipers data={data.data.results}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(LandingPages)

