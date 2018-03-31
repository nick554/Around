import React from 'react'
import { Tabs, Button } from 'antd';
import { TabPane, GEO_OPTIONS } from '../constants'


export class Home extends React.Component {
    state = {
        error:'',
    }
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
            // Barely happen now. Haven't been tested.
            this.setState({ error:'Your browser does not support geolocation!' });
        }
    }

    onSuccessGetGeolocation = (position) => {
        console.log(position);
    }
    onFailureGetGeolocation = () => {
        this.setState({ error: 'Failed to load geo location!' });
    }

    getPostContent = () => {
        if (this.state.error) {
            return <div>{this.state.error}</div>;
        } else {
            return <div>have this function</div>;
        }
    }

    render() {
        return (
            <Tabs tabBarExtraContent={ <Button type = 'primary'>Create New Post</Button> } className="home-tags">
                <TabPane tab="Posts" key="1">{this.getPostContent()}</TabPane>
                <TabPane tab="Map View" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}