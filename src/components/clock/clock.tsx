
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as ReactDOM from "react-dom";
import {ComponentConfig} from '../../core/models/config';

type ClockComponentProps = {
    config: ComponentConfig;
  };

export const ClockComponent = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      let secTimer = setInterval( () => {
        setTime(new Date())
      },1000)
  
      return () => clearInterval(secTimer);
  }, []);

    return (
      <Container style={{height: '100%'}}>
        <Row style={{height: '70%'}}>
          <Col style={{ textAlign: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="80px" height="80px"><path fill="#ffeea3" d="M17.845,33.57l-0.248-0.043c-0.764-0.135-1.53-0.34-2.276-0.612l-0.236-0.085l-4.025,2.657 l0.288-4.804l-0.191-0.162c-0.604-0.508-1.167-1.072-1.676-1.676l-0.162-0.192l-4.804,0.288l2.657-4.024L7.085,24.68 c-0.271-0.748-0.477-1.513-0.611-2.276L6.43,22.156L2.118,20l4.312-2.156l0.044-0.248c0.135-0.763,0.341-1.529,0.611-2.277 l0.086-0.236l-2.657-4.024l4.805,0.288l0.162-0.192c0.507-0.603,1.07-1.167,1.675-1.675l0.191-0.162l-0.288-4.804l4.025,2.657 l0.235-0.085c0.749-0.271,1.516-0.478,2.277-0.612l0.248-0.043L20,2.118l2.155,4.312l0.248,0.043 c0.762,0.134,1.528,0.34,2.277,0.612l0.235,0.085l4.025-2.657l-0.288,4.804l0.191,0.162c0.604,0.509,1.168,1.072,1.675,1.675 l0.162,0.192l4.805-0.288l-2.657,4.024l0.086,0.236c0.271,0.748,0.477,1.514,0.611,2.277l0.044,0.248L37.882,20l-4.312,2.156 l-0.044,0.248c-0.135,0.763-0.341,1.529-0.611,2.276l-0.086,0.236l2.657,4.024l-4.804-0.288l-0.162,0.192 c-0.509,0.604-1.072,1.168-1.676,1.676l-0.191,0.162l0.288,4.804l-4.025-2.657l-0.236,0.085c-0.746,0.271-1.513,0.477-2.276,0.612 l-0.248,0.043L20,37.882L17.845,33.57z"/><path fill="#ba9b48" d="M20,3.236l1.596,3.192l0.225,0.45l0.495,0.088c0.736,0.13,1.474,0.328,2.193,0.589l0.473,0.171 l0.419-0.277l2.98-1.968l-0.213,3.555l-0.03,0.502l0.384,0.324c0.582,0.49,1.125,1.033,1.615,1.615l0.324,0.384l0.501-0.03 l3.555-0.213l-1.968,2.98l-0.277,0.419l0.171,0.473c0.261,0.719,0.459,1.457,0.589,2.193l0.087,0.495l0.45,0.225L36.764,20 l-3.192,1.596l-0.45,0.225l-0.087,0.495c-0.13,0.736-0.328,1.474-0.589,2.193l-0.171,0.472l0.277,0.419l1.968,2.98l-3.555-0.213 l-0.502-0.03l-0.324,0.384c-0.489,0.582-1.033,1.125-1.615,1.615l-0.384,0.324l0.03,0.501l0.213,3.555l-2.98-1.968l-0.419-0.277 l-0.473,0.171c-0.719,0.261-1.457,0.459-2.193,0.589l-0.495,0.087l-0.225,0.45L20,36.764l-1.596-3.192l-0.225-0.45l-0.495-0.087 c-0.736-0.13-1.474-0.328-2.193-0.589l-0.473-0.171l-0.419,0.277l-2.98,1.968l0.213-3.555l0.03-0.501l-0.384-0.324 c-0.582-0.49-1.126-1.033-1.615-1.615l-0.324-0.384l-0.502,0.03l-3.555,0.213l1.968-2.98l0.277-0.419L7.555,24.51 c-0.261-0.719-0.459-1.457-0.589-2.193l-0.087-0.495l-0.45-0.225L3.236,20l3.192-1.596l0.45-0.225l0.087-0.495 c0.13-0.736,0.328-1.474,0.589-2.193l0.171-0.473L7.45,14.598l-1.968-2.98l3.555,0.213l0.501,0.03l0.324-0.384 c0.49-0.582,1.033-1.125,1.615-1.615l0.384-0.324l-0.03-0.502l-0.213-3.555l2.98,1.968l0.419,0.277l0.473-0.171 c0.719-0.261,1.457-0.459,2.193-0.589l0.495-0.088l0.225-0.45L20,3.236 M20,1l-2.491,4.981c-0.814,0.144-1.601,0.358-2.36,0.634 L10.5,3.545l0.333,5.552c-0.627,0.528-1.208,1.109-1.736,1.736L3.546,10.5l3.07,4.649c-0.276,0.76-0.49,1.547-0.634,2.36L1,20 l4.981,2.491c0.144,0.814,0.358,1.601,0.634,2.36L3.546,29.5l5.552-0.333c0.528,0.627,1.109,1.208,1.736,1.736L10.5,36.454 l4.649-3.07c0.76,0.276,1.547,0.49,2.36,0.634L20,39l2.491-4.981c0.814-0.144,1.601-0.358,2.36-0.634l4.649,3.07l-0.333-5.552 c0.627-0.528,1.208-1.109,1.736-1.736l5.552,0.333l-3.07-4.649c0.276-0.76,0.49-1.547,0.634-2.36L39,20l-4.981-2.491 c-0.144-0.814-0.358-1.601-0.634-2.36l3.07-4.649l-5.552,0.333c-0.528-0.627-1.109-1.208-1.736-1.736L29.5,3.545l-4.649,3.07 c-0.76-0.275-1.547-0.49-2.36-0.634L20,1L20,1z"/><path fill="#f5ce85" d="M20 10A10 10 0 1 0 20 30A10 10 0 1 0 20 10Z"/></svg>
          </Col>
        </Row>
        <Row style={{height: '30%', textAlign: 'center'}}>
          <Col>{time.toLocaleTimeString()}</Col>
        </Row>
      </Container>
    )
}