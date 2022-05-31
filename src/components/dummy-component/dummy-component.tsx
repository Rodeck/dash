import {ComponentConfig} from '../../core/models/config';

type DummyComponentProps = {
    config: ComponentConfig;
  };

export const DummyComponent = ({ config }: DummyComponentProps) => <div>{config.xPosition}</div>;