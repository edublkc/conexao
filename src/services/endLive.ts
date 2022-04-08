import { broadcastId } from "./createYoutubeLive"

export function endBroadcast(){
    async function endYoutubeLive(){

            try{
                const req = await  (window.gapi as any).client.youtube.liveBroadcasts
                .transition({
                  part: ['id,snippet,contentDetails,status'],
                  broadcastStatus: 'complete',
                  id: broadcastId,
                })

                return await req
            }catch(erro){
                throw new Error('Something wrong happened')
            }
    }

    return {
        endYoutubeLive
    }
}