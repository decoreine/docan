interface Illustrations {
    set: "dozzy-1" | "sigma-1" | "sketchy-1" | "unitedpalms-1";
}
interface Icons {
    style: "duotone" | "solid" | "outline";
}

interface LayoutConfig {
    illustrations: Illustrations;
    icons : Icons;
}

export default LayoutConfig;

export type {
    Illustrations,
    Icons,
};
