import { ComponentConfig } from "./config";

export interface Layout {
    components: Component[];
}

export interface Component {
    id: string;
    config: ComponentConfig;
}