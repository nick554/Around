import React from 'react'
import { Tabs, Button } from 'antd';
import {TabPane} from '../constants'


export class Home extends React.Component {
    render() {


        return (
            <Tabs tabBarExtraContent={ <Button type = 'primary'>Create New Post</Button> } className="home-tags">
                <TabPane tab="Posts" key="1">Content of tab 1</TabPane>
                <TabPane tab="Map View" key="2">Content of tab 2</TabPane>
            </Tabs>
        );
    }
}