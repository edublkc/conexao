export interface StylesProps{
    nameTextColor: string
    nameBackgroundColor: string

    chatNameTextColor: string
    chatNameBackgroundColor: string

    chatMessageTextColor: string
    chatMessageBackgroundColor: string

    backgroundColor: string
}


export function stylesDraw(props: StylesProps){
    stylesCanvasDraw.nameTextColor = props.nameTextColor
    stylesCanvasDraw.nameBackgroundColor = props.nameBackgroundColor

    stylesCanvasDraw.chatNameTextColor = props.chatNameTextColor
    stylesCanvasDraw.chatNameBackgroundColor = props.chatNameBackgroundColor

    stylesCanvasDraw.chatMessageTextColor = props.chatMessageTextColor
    stylesCanvasDraw.chatMessageBackgroundColor = props.chatMessageBackgroundColor

    stylesCanvasDraw.backgroundColor = props.backgroundColor
}

export const stylesCanvasDraw:StylesProps = {
    nameTextColor: '#ffffff',
    nameBackgroundColor: '#000000',
    chatNameTextColor: '#ffffff',
    chatNameBackgroundColor: '#000000',
    chatMessageTextColor: '#000000',
    chatMessageBackgroundColor: '#ffffff',
    backgroundColor: '#0066ff'
}