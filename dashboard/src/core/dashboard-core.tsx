import * as React from "react";
import { ComponentConfig } from "./models/config";
import LayoutService from './services/layout-provider'
import {DummyComponent} from './../components/dummy-component/dummy-component'
import { ClockComponent } from "../components/clock/clock";
import { Button, Card } from "react-bootstrap";
import { EventsComponent } from "../components/events/events-component";
import { TrelloComponent } from "../components/trello/trello-component";

const screenSize = {
    width: 12,
    height: 6,
}

const getComponentHeight = function(component: ComponentConfig, windowHeight: number) : number {
  let boxSize = windowHeight / screenSize.height;

  return component.height * boxSize;
}

const getComponentWidth = function(component: ComponentConfig, windowWidth: number) : number {
  let boxSize = windowWidth / screenSize.width;

  return component.width * boxSize;
}

const getComponentOffsetY = function(component: ComponentConfig, windowHeight: number) : number {
    let boxSize = windowHeight / screenSize.height;

  return component.yPosition * boxSize;
}

const getComponentOffsetX = function(component: ComponentConfig, windowWidth: number) : number {
    let boxSize = windowWidth / screenSize.width;

  return component.xPosition * boxSize;
}

const components = [
    {
        name: "dummyComponent",
        component: DummyComponent
    },
    {
        name: "clockComponent",
        component: ClockComponent
    },
    {
        name: "eventsComponent",
        component: EventsComponent
    },
    {
        name: "trelloComponent",
        component: TrelloComponent
    },
];

export const DashboardCore = () => {
    const { height, width } = LayoutService.useWindowDimensions();
    let layout = LayoutService.getLayout();

    return (
        <div className="app">
            {layout.components.map(item => (
                <div className="component" style={{
                        height: getComponentHeight(item.config, height),
                        width: getComponentWidth(item.config, width),
                        top: getComponentOffsetY(item.config, height),
                        left: getComponentOffsetX(item.config, width),
                        maxHeight: getComponentHeight(item.config, height),
                        maxWidth: getComponentWidth(item.config, width),
                    }} >
                        <Card style={{
                            height: getComponentHeight(item.config, height),
                            width: getComponentWidth(item.config, width),
                        }}>
                            <Card.Body>
                                <Card.Text>
                                {React.createElement(components.find(c => c.name === item.id)!.component, {config: item.config})}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                </div>
            ))}
        </div>
    )
}