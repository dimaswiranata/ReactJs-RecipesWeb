import React, { Component } from 'react'
import { connect } from "react-redux";

import { loadData } from "store/actions/data";

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
      <div>
        <div>{data.data.href}</div>
        <div>{data.data.title}</div>
        <div>{data.data.version}</div>
        -------------------------------------
        {
          data.data.results.map((item, index) => {
            return(
              <div
                key={`result-${index}`}
              >
                <div>
                  {item.ingredients}
                </div>
                <div>
                  {item.title}
                </div>
                <div>
                  {item.href}
                </div>
                <div>
                  {item.thumbnail}
                </div>
                -------------------------------------
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(LandingPages)

