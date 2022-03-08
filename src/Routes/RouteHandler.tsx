import { Navigate } from "react-router-dom"

type Props = {
    children: React.ReactNode
    auth?: boolean
}

export function RouteHandler({ auth = true, children }: Props) {
    let authorizade = auth

    if (authorizade) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return (
            <Navigate to="/" />
        )
    }

}