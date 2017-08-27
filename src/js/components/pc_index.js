import React from 'react';
import PCHeader from './pc_header';
import PCNews from './pc_news';
import PCAbout from './pc_about';
import PCFooter from './pc_footer';
export default class PCIndex extends React.Component{
  render(){
    return(
      <div>
        <PCHeader></PCHeader>
        <PCNews></PCNews>
        <PCAbout></PCAbout>
        <PCFooter></PCFooter>
      </div>

    );
  };
}
