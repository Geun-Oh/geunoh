interface Cylinder {
    radius: number
    height: number
}

const Cylinder = ({radius, height}: Cylinder) => ({ radius, height })
function calculateVolume(shape: unknown) {
    if(shape instanceof Cylinder) {
        shape.radius
    }
}