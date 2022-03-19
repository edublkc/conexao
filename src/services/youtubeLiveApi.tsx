import React, { useEffect, useRef, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import axios, { AxiosResponse } from "axios"
import {Helmet} from "react-helmet";

const clientId = "930614894956-0hpnrca1fjg9a7ierak837n8ih331ojo.apps.googleusercontent.com";
const apikey = 'AIzaSyA5WZMScvIE7yFXCQ4Y41EAteDZ1cfAqQE'
const apisite = 'https://apis.google.com/js/api.js'

export function Youtube() {
   
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    
    const [userAuth, setUserAuth] = useState<any>()

    const [broadcast, setBroadcast] = useState<AxiosResponse>()
    const [streamId, setstreamId] = useState('')
    const [youtubeIngestionUrl, setYoutubeIngestionUrl] = useState('')
    const [youtubeStreamName, setYoutubeStreamName] = useState('')

    const [mediaStream, setMediaStream] = useState<any>(null)

    const onLoginSuccess = (res: any) => {
        console.log('Login Success:', res);
        setUserAuth(res)
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const videoRef = useRef()

    
    const startStream = async () => {
        const servers = {
            iceServers: [
              {
                urls: ['stun:stun1.l.google.com:19302'],
              },
            ],
            iceCandidatePoolSize: 10,
          };
        const pc = new RTCPeerConnection(servers);
        

        let liveStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          })

        let liveStreamRecorder = new MediaRecorder(liveStream, {
            mimeType: 'video/webm;codecs=h264',
            videoBitsPerSecond: 3 * 1024 * 1024,
          })
          
          liveStreamRecorder.start(1000)
      }

   

      console.log((window.gapi as any))


    function handleCreateBroadcast() {
        return (window.gapi as any).client?.youtube?.liveBroadcasts?.insert({
          part: ['id,snippet,contentDetails,status'],
          resource: {
            snippet: {
              title: `New Video: ${new Date().toLocaleDateString('pt-BR',{'day':'2-digit',month:'2-digit',year:'numeric'})}`,
              scheduledStartTime: `${new Date().toISOString()}`,
              description:
                'A description of your video stream. This field is optional.',
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
              privacyStatus: 'private',
              selfDeclaredMadeForKids: true,
            },
          },
        }).then((res: any) => {
            console.log('Response', res)
            console.log(res.result.id)
            setBroadcast(res.result.id)
          })
    }



    function handleCreateStream() {
        return (window.gapi as any).client.youtube.liveStreams
      .insert({
        part: ['snippet,cdn,contentDetails,status'],
        resource: {
          snippet: {
            title: "Your new video stream's name",
            description:
              'A description of your video stream. This field is optional.',
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
      .then((res: any) => {
        console.log('Response', res)

        setstreamId(res.result.id)
        console.log('streamID' + res.result.id)

        setYoutubeIngestionUrl(res.result.cdn.ingestionInfo.ingestionAddress)
        console.log(res.result.cdn.ingestionInfo.ingestionAddress)

        setYoutubeStreamName(res.result.cdn.ingestionInfo.streamName)
        console.log(res.result.cdn.ingestionInfo.streamName)
      })
      .catch((err: any) => {
        console.log('Execute error', err)
      })
    }

    

    function handlebindBroadcast() {
        return (window.gapi as any).client.youtube.liveBroadcasts
        .bind({
          part: ['id,snippet,contentDetails,status'],
          id: broadcast,
          streamId: streamId,
        })
        .then((res:any) => {
          console.log('Response', res)
        })
        .catch((err:any) => {
          console.error('Execute error', err)
        })
    }

    function handleLive() {
        return (window.gapi as any).client.youtube.liveBroadcasts
        .transition({
          part: ['id,snippet,contentDetails,status'],
          broadcastStatus: 'live',
          id: broadcast,
        })
        .then((res: any) => {
          // Handle the results here (response.result has the parsed body).
          console.log('Response', res)
        })
        .catch((err: any) => {
          console.log('Execute error', err)
        })
    }
  
    (window.gapi as any).load('client:auth2', function () {
        (window.gapi as any).auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      })
    })



    const onLoginFailure = (res: any) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        
        <div>
            
            
                    <br />
                    <button style={{ backgroundColor: '#ccc' }} onClick={()=> handleCreateBroadcast()}>Criar broadcast</button>
                    <br />
                    <button style={{ backgroundColor: '#ccc' }} onClick={handleCreateStream}>Criar stream</button>
                    <br />
                    <button style={{ backgroundColor: '#ccc' }} onClick={handlebindBroadcast}>Bind stream</button>
                    <br />
                    <button style={{ backgroundColor: '#ccc' }} onClick={startStream}>GO LIVE</button>
                    <br />
                    <button style={{ backgroundColor: '#ccc' }} onClick={handleLive}>Transition live</button>
                    <br />
        </div>
    )
}