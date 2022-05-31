import { Layout, Component } from "../models/layout";
import layout from './../../layout.json'
import { useState, useEffect } from 'react';

const LayoutService = {

    getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    },

    useWindowDimensions() {
        let instance = this;
        const [windowDimensions, setWindowDimensions] = useState(this.getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(instance.getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
    },
      

    getLayout: function() : Layout {

        let components: Component[] = layout.components.map(component => {
            return {
                id: component.id,
                config: {
                    height: component.height,
                    width: component.width,
                    xPosition: component.xPosition,
                    yPosition: component.yPosition,
                }
            }
        });

        return {
            components: components,
        }
    },
};

export default LayoutService;