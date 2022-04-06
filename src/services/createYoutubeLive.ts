interface CreateBroadcastInformations{
    title: string,
    description: string,
    privacity: string
}


export interface streamInformations {
    broadcastId: string
    streamId: string
    youtubeIngestionUrl:string
    youtubeStreamName:string
    rtmpUrl: string
    liveChatId: string
}

let broadcastId: string
let streamId: string
let youtubeIngestionUrl:string
let youtubeStreamName:string
let livechatid: string

const streamInformations = {} as streamInformations

export async function handleCreateYoutubeBroadcast(broadcastInformations:CreateBroadcastInformations) {
    

    const res = await (window.gapi as any).client?.youtube?.liveBroadcasts?.insert({
        part: ['id,snippet,contentDetails,status'],
        resource: {
            snippet: {
                title: broadcastInformations.title,
                scheduledStartTime: `${new Date().toISOString()}`,
                description: broadcastInformations.description,
            },
            contentDetails: {
                recordFromStart: true,
                // startWithSlate: true,
                enableAutoStart: true,
                monitorStream: {
                    enableMonitorStream: false,
                },
            },
            status: {
                privacyStatus: broadcastInformations.privacity,
                selfDeclaredMadeForKids: false,
            },
        },
    })

    broadcastId = await res.result.id
    livechatid = await res.result.snippet.liveChatId

    streamInformations.broadcastId = broadcastId
    streamInformations.liveChatId = livechatid

    return await handleCreateStream(broadcastInformations)

}



async function handleCreateStream(broadcastInformations:CreateBroadcastInformations) {
    const res = await (window.gapi as any).client.youtube.liveStreams
        .insert({
            part: ['snippet,cdn,contentDetails,status'],
            resource: {
                snippet: {
                    title: broadcastInformations.title,
                    description: broadcastInformations.description,

                },
                cdn: {
                    frameRate: 'variable',
                    ingestionType: 'rtmp',
                    resolution: 'variable',
                    format: '',
                },
                contentDetails: {
                    isReusable: true,
                },
            },
        })

    streamId = await res.result.id
    youtubeIngestionUrl = await res.result.cdn.ingestionInfo.ingestionAddress
    youtubeStreamName = await res.result.cdn.ingestionInfo.streamName

    streamInformations.streamId = streamId
    streamInformations.youtubeIngestionUrl = youtubeIngestionUrl
    streamInformations.youtubeStreamName = youtubeStreamName
    streamInformations.rtmpUrl = youtubeIngestionUrl + '/' + youtubeStreamName

    return await handlebindBroadcast(broadcastInformations)

}



async function handlebindBroadcast(broadcastInformations:CreateBroadcastInformations) {
    const res = await (window.gapi as any).client.youtube.liveBroadcasts
        .bind({
            part: ['id,snippet,contentDetails,status'],
            id: broadcastId,
            streamId: streamId,
        })
        
        return streamInformations
}