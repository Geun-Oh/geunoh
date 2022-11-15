import Components from './src/components/components';
import yaml from 'js-yaml';
import fs from 'fs';
import { exec } from 'child_process';
import json from './dst.json';
import { useState } from 'react';

export interface Idst {
    component: keyof typeof Components;
    attribute?: Array<object>;
    children?: Array<Idst>;
}

export const RenderWithYaml = (route: string) => {
    const initialState: Idst = {
        component: "Text",
        attribute: [{ innerText: "Hello!" }]
    }
    const [DST, setDST] = useState<Idst>(initialState);
    try {
        const dst = JSON.stringify(yaml.load(fs.readFileSync(route, 'utf-8')));
        setDST(JSON.parse(dst) as Idst);
        // exec(`cd ../react-prac && cat <<EOF > ./dst.json\n ${dst}`);
    } catch (e) {
        console.log(e);
    }
    return (
        <>
            {RenderDst(DST)}
        </>
    )
}

export const RenderDst = ({ component, attribute, children }: Idst) => {
    console.log(component, attribute, children)
    if(component === "Flex" || component === "Box") {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        const a = attribute !== undefined ? attribute[0] : [];
        return (
            <C {...a}>
                {children!.map((item) => RenderDst(item))}
            </C>
        )
    } else {
        const componentName: keyof typeof Components = component
        const C = Components[componentName]
        const a = attribute !== undefined ? attribute[0] : [];
        return (
            <C {...a} />
        )
    }
}