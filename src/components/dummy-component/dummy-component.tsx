
import * as React from "react";
import * as ReactDOM from "react-dom";
import {ComponentConfig} from '../../core/models/config';

type DummyComponentProps = {
    config: ComponentConfig;
  };

export const DummyComponent = ({ config }: DummyComponentProps) => <div>{config.xPosition}</div>;