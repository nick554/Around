import React from 'react'
import { Tabs, Button } from 'antd';
import { TabPane, GEO_OPTIONS } from '../constants'


export class Home extends React.Component {
    componentDidMount() {
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        if ( "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessGetGeolocation,
                this.onFailureGetGeolocation,
                GEO_OPTIONS
            );
        } else {

        }
    }

    onSuccessGetGeolocation = (position) => {
        console.log(position);
    }
    onFailureGetGeolocation = () => {
        console.log('false')
    }


    render() {
        return (
            <Tabs tabBarExtraContent={ <Button type = 'primary'>Create New Post</Button> } className="home-tags">
                <TabPane tab="Posts" key="1">Content of tab 1</TabPane>
                <TabPane tab="Map View" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}