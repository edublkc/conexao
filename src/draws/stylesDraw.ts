interface Props{
    nameTextColor: string
}

interface stylesCanvasDraw{
    nameTextColor: string
}

export function stylesDraw(props: Props){
    stylesCanvasDraw.nameTextColor = props.nameTextColor
}

export const stylesCanvasDraw:stylesCanvasDraw = {
    nameTextColor: '#000'
}