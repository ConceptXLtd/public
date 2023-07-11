const soppiyaIcons = {
    facebook: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Facebook" d="M14,7.116a7.035,7.035,0,0,1-5.909,6.957V9.165H9.718l.31-2.031H8.091V5.817a1.012,1.012,0,0,1,1.137-1.1h.88V2.991a10.666,10.666,0,0,0-1.563-.137A2.471,2.471,0,0,0,5.909,5.586V7.134H4.136V9.164H5.909v4.908A7.039,7.039,0,1,1,14,7.116Z" transform="translate(0 -0.073)"/></svg>`,
        action: '',
    },
    email: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 13.999 12"><path id="Email" d="M-996.083-620A2.914,2.914,0,0,1-999-622.91v-6.173c0-.092.019-.176.027-.267l4.91,3.743c1.534,1.168,2.6,1.154,4.126,0l4.91-3.743c.008.092.026.175.026.267v6.173a2.913,2.913,0,0,1-2.916,2.91Zm2.845-6.431-5.328-4.162A2.908,2.908,0,0,1-996.083-632h8.167a2.907,2.907,0,0,1,2.482,1.406l-5.328,4.162a2.14,2.14,0,0,1-1.22.519A2.332,2.332,0,0,1-993.238-626.432Z" transform="translate(999 632)"/></svg>`,
        action: 'mailto:'
    },
    twitter: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 12"><path id="Twitter" d="M6.992-9.878a5.9,5.9,0,0,1-1.662.493,2.71,2.71,0,0,0,.778-.709,3.084,3.084,0,0,0,.488-.979,5.073,5.073,0,0,1-1.822.739,2.654,2.654,0,0,0-.933-.709A2.748,2.748,0,0,0,2.682-11.3a2.641,2.641,0,0,0-1.438.411A3.008,3.008,0,0,0,.2-9.777,3.085,3.085,0,0,0-.184-8.26a3.228,3.228,0,0,0,.064.692,7.772,7.772,0,0,1-3.308-.943,8.287,8.287,0,0,1-2.6-2.227,3.191,3.191,0,0,0-.383,1.51,3.121,3.121,0,0,0,.344,1.451,3.006,3.006,0,0,0,.937,1.089,2.5,2.5,0,0,1-1.294-.388v.048A3.032,3.032,0,0,0-5.782-5.1,2.8,2.8,0,0,0-4.131-4.056a2.763,2.763,0,0,1-.767.1,2.556,2.556,0,0,1-.527-.051A2.925,2.925,0,0,0-4.419-2.511a2.689,2.689,0,0,0,1.662.6,5.42,5.42,0,0,1-1.654.962A5.5,5.5,0,0,1-6.32-.613q-.208,0-.639-.034h-.048A7.708,7.708,0,0,0-2.6.7,7.9,7.9,0,0,0,.9-.073,7.82,7.82,0,0,0,3.46-2.1,9.168,9.168,0,0,0,5.027-4.868a9.111,9.111,0,0,0,.527-3.039v-.4A5.973,5.973,0,0,0,6.992-9.878Z" transform="translate(7.008 11.296)"/></svg>`,
        action: ''
    },
    youtube: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 10"><path id="YouTube" d="M6-7.224H5.972v-.415q0-.193-.028-.385v-.029a3.079,3.079,0,0,0-.028-.342l-.028-.342q-.014-.228-.028-.328-.056-.257-.2-.741a1.511,1.511,0,0,0-.308-.6,1.793,1.793,0,0,0-1.232-.641q-.252-.029-.742-.057l-.77-.043q-.7-.029-1.078-.029Q.834-11.2.47-11.2H-.216q-.938-.014-1.4,0-.7,0-2.1.029l-1.176.043q-.616.029-.931.057a6.073,6.073,0,0,0-.609.086,1.612,1.612,0,0,0-1.036.756,2.651,2.651,0,0,0-.336.941q-.056.271-.112.813-.028.257-.056.784v.043Q-8-7.2-8-6.969q0,1.283.014,1.924,0,.171.028.485.028.456.056.684l.014.171q.014.228.028.342a4.575,4.575,0,0,0,.224.842A1.608,1.608,0,0,0-6.6-1.509a4.2,4.2,0,0,0,.966.171h.014q.182.014.532.029l.266.014q.448.029.672.029l1.036.029,2.646.029,2.114-.043.868-.029A2.222,2.222,0,0,0,2.808-1.3H2.85q.6-.029.91-.057a4.53,4.53,0,0,0,.588-.071,1.689,1.689,0,0,0,1.288-1.11A4.412,4.412,0,0,0,5.9-3.817q.028-.228.056-.7L6-5.528ZM-2.442-4.36V-8.366l3.78,2.01Z" transform="translate(8 11.21)"/></svg>`,
        action: ''
    },
    linkedin: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Linkedin" d="M6.011-12.608H-5.913a1.026,1.026,0,0,0-.74.3.953.953,0,0,0-.305.711V.385a.953.953,0,0,0,.305.711,1.026,1.026,0,0,0,.74.3H6.011a1.007,1.007,0,0,0,.725-.3A.953.953,0,0,0,7.041.385V-11.6a.953.953,0,0,0-.305-.711A1.007,1.007,0,0,0,6.011-12.608ZM-2.711-.895H-4.819V-7.207h2.109ZM-3.774-8.07H-3.79a1.153,1.153,0,0,1-.837-.311,1.044,1.044,0,0,1-.322-.784,1.031,1.031,0,0,1,.331-.783,1.2,1.2,0,0,1,.862-.311,1.174,1.174,0,0,1,.853.311,1.044,1.044,0,0,1,.321.783,1.044,1.044,0,0,1-.322.783A1.2,1.2,0,0,1-3.774-8.07ZM4.9-.895H2.793V-4.281A1.8,1.8,0,0,0,2.552-5.3a.929.929,0,0,0-.821-.4,1.115,1.115,0,0,0-.7.24,1.5,1.5,0,0,0-.386.527,1.652,1.652,0,0,0-.064.512v3.53H-1.536v-2.94q.016-3,0-3.372H.572v.9a2.118,2.118,0,0,1,1.9-1.039,2.267,2.267,0,0,1,1.738.687A3.046,3.046,0,0,1,4.9-4.523Z" transform="translate(6.959 12.608)"/></svg>`,
        action: ''
    },
    instagram: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Instagram" d="M-.927-10.151a3.527,3.527,0,0,0-1.812.488A3.688,3.688,0,0,0-4.07-8.34a3.5,3.5,0,0,0-.5,1.82A3.54,3.54,0,0,0-4.077-4.7,3.617,3.617,0,0,0-2.746-3.378,3.578,3.578,0,0,0-.92-2.889,3.54,3.54,0,0,0,.9-3.378,3.633,3.633,0,0,0,2.221-4.7a3.54,3.54,0,0,0,.489-1.82,3.54,3.54,0,0,0-.488-1.819A3.633,3.633,0,0,0,.9-9.661a3.553,3.553,0,0,0-1.827-.489Zm0,5.875a2.178,2.178,0,0,1-1.125-.3A2.282,2.282,0,0,1-2.874-5.4a2.178,2.178,0,0,1-.3-1.125,2.14,2.14,0,0,1,.3-1.118,2.3,2.3,0,0,1,.821-.814,2.178,2.178,0,0,1,1.125-.3,2.178,2.178,0,0,1,1.125.3,2.3,2.3,0,0,1,.821.81,2.14,2.14,0,0,1,.3,1.118,2.178,2.178,0,0,1-.3,1.125A2.282,2.282,0,0,1,.2-4.581a2.178,2.178,0,0,1-1.125.3ZM2.046-13.52H-3.9a3.909,3.909,0,0,0-2.022.552A3.985,3.985,0,0,0-7.38-11.5a3.95,3.95,0,0,0-.54,2.017v5.931a3.95,3.95,0,0,0,.538,2.018A3.985,3.985,0,0,0-5.924-.072,3.909,3.909,0,0,0-3.9.48H2.046A3.985,3.985,0,0,0,4.084-.072,4.07,4.07,0,0,0,5.528-1.516,3.985,3.985,0,0,0,6.08-3.554V-9.486a3.985,3.985,0,0,0-.552-2.039,4.07,4.07,0,0,0-1.444-1.444,3.985,3.985,0,0,0-2.039-.552ZM4.7-3.554a2.6,2.6,0,0,1-.357,1.328,2.616,2.616,0,0,1-.965.965A2.6,2.6,0,0,1,2.046-.9H-3.9a2.567,2.567,0,0,1-1.322-.354,2.633,2.633,0,0,1-.957-.968,2.6,2.6,0,0,1-.354-1.328V-9.486a2.6,2.6,0,0,1,.354-1.331,2.633,2.633,0,0,1,.956-.963A2.567,2.567,0,0,1-3.9-12.133H2.046a2.6,2.6,0,0,1,1.331.354,2.616,2.616,0,0,1,.963.963A2.6,2.6,0,0,1,4.7-9.486ZM2.767-11.212a.926.926,0,0,0-.68.283.926.926,0,0,0-.283.68.9.9,0,0,0,.283.673.939.939,0,0,0,.68.276.915.915,0,0,0,.673-.276.915.915,0,0,0,.276-.673.939.939,0,0,0-.276-.68A.9.9,0,0,0,2.767-11.212Z" transform="translate(7.92 13.52)"/></svg>`,
        action: '',
    },
    whatsapp: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Whatsapp" d="M.185-12.608a6.788,6.788,0,0,0-3.468.927A6.925,6.925,0,0,0-5.75-9.236a6.719,6.719,0,0,0-.936,3.452,6.8,6.8,0,0,0,.247,1.838A6.5,6.5,0,0,0-5.7-2.268L-6.944,1.392-3.138.177a6.756,6.756,0,0,0,3.323.847A6.788,6.788,0,0,0,3.652.1,6.925,6.925,0,0,0,6.12-2.348a6.632,6.632,0,0,0,.936-3.436A6.632,6.632,0,0,0,6.12-9.22a6.884,6.884,0,0,0-2.468-2.461,6.788,6.788,0,0,0-3.468-.927ZM3.556-3.434a1.081,1.081,0,0,1-.451.527,2.08,2.08,0,0,1-.694.288A1.681,1.681,0,0,1,1.8-2.6a6.592,6.592,0,0,1-1.4-.448A6.642,6.642,0,0,1-2.431-5.5l-.078-.1A2.964,2.964,0,0,1-3.171-7.3a1.764,1.764,0,0,1,.226-.911A1.838,1.838,0,0,1-2.59-8.68l.016-.016a.674.674,0,0,1,.258-.156A.957.957,0,0,1-2-8.908a.792.792,0,0,1,.2.016.4.4,0,0,1,.217.048.544.544,0,0,1,.157.224q.194.447.516,1.244a.284.284,0,0,1,.024.3,1.93,1.93,0,0,1-.185.28l-.258.271-.016.032a.7.7,0,0,0-.078.144.183.183,0,0,0,.032.176,2.668,2.668,0,0,0,.323.479,4.31,4.31,0,0,0,.613.688,3.952,3.952,0,0,0,1.366.824.37.37,0,0,0,.217.032.273.273,0,0,0,.185-.1,4.265,4.265,0,0,0,.355-.467l.1-.128a.316.316,0,0,1,.419-.112q.1.032.838.383l.436.208q.177.078.2.144a.778.778,0,0,1,.008.271,2.908,2.908,0,0,1-.111.515Z" transform="translate(6.944 12.608)"/></svg>`,
        action: 'https://wa.me/'
    },
    pinterest: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Pinterest" d="M7.026,0A6.995,6.995,0,0,0,4.471,13.511,6.73,6.73,0,0,1,4.494,11.5c.127-.547.819-3.477.819-3.477a2.544,2.544,0,0,1-.207-1.036c0-.973.565-1.7,1.269-1.7a.88.88,0,0,1,.888.985,13.785,13.785,0,0,1-.583,2.332A1.018,1.018,0,0,0,7.717,9.873c1.246,0,2.2-1.312,2.2-3.2A2.762,2.762,0,0,0,6.991,3.828,3.03,3.03,0,0,0,3.825,6.862a2.73,2.73,0,0,0,.519,1.595.2.2,0,0,1,.047.2c-.052.219-.173.7-.2.795-.029.127-.1.155-.237.092A3.133,3.133,0,0,1,2.533,6.833c0-2.2,1.6-4.231,4.63-4.231a4.109,4.109,0,0,1,4.319,4.041C11.482,9.056,9.96,11,7.849,11a1.861,1.861,0,0,1-1.6-.806l-.438,1.664a7.611,7.611,0,0,1-.871,1.836A7.084,7.084,0,0,0,7.014,14,7,7,0,0,0,7.026,0Z" transform="translate(-0.02)"/></svg>`,
        action: ''
    },
    tiktok: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 14"><path id="TikTok" d="M8.409.012C9.161,0,9.91.007,10.658,0a3.66,3.66,0,0,0,1.007,2.434A4.039,4.039,0,0,0,14.1,3.478v2.35a6.044,6.044,0,0,1-2.417-.565,6.971,6.971,0,0,1-.933-.545c0,1.705.007,3.408-.011,5.106a4.483,4.483,0,0,1-.778,2.3A4.27,4.27,0,0,1,6.564,14a4.143,4.143,0,0,1-2.347-.6,4.4,4.4,0,0,1-2.1-3.333C2.1,9.772,2.1,9.48,2.111,9.2a4.413,4.413,0,0,1,1.68-3.052A4.292,4.292,0,0,1,7.136,5.3c.012.864-.022,1.728-.022,2.592A1.955,1.955,0,0,0,5.6,7.978,2,2,0,0,0,4.591,9.127a2.35,2.35,0,0,0-.077.939A1.98,1.98,0,0,0,6.066,11.7a1.954,1.954,0,0,0,2.055-.9,1.388,1.388,0,0,0,.236-.622c.057-1.044.034-2.083.041-3.127,0-2.353-.007-4.7.011-7.043Z" transform="translate(-2.104)"/></svg>`,
        action: ''
    },
    skype: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Skype" d="M6.419-4.594A6.729,6.729,0,0,0,6.5-5.605a6.431,6.431,0,0,0-.878-3.277,6.455,6.455,0,0,0-2.334-2.333A6.441,6.441,0,0,0,0-12.1a6.741,6.741,0,0,0-1.011.078,3.906,3.906,0,0,0-2.056-.592,3.823,3.823,0,0,0-1.977.528,3.942,3.942,0,0,0-1.424,1.431,3.845,3.845,0,0,0-.528,1.976,3.8,3.8,0,0,0,.576,2.047A7.282,7.282,0,0,0-6.5-5.605a6.431,6.431,0,0,0,.879,3.28A6.455,6.455,0,0,0-3.282.008,6.441,6.441,0,0,0,0,.89,6.741,6.741,0,0,0,1.014.812a3.892,3.892,0,0,0,2.065.576A3.808,3.808,0,0,0,5.047.861,3.942,3.942,0,0,0,6.472-.571a3.893,3.893,0,0,0-.053-4.024ZM3.09-2.644a2.7,2.7,0,0,1-1.22.927A4.948,4.948,0,0,1,0-1.4a4.508,4.508,0,0,1-2.146-.448,2.942,2.942,0,0,1-.976-.888A1.873,1.873,0,0,1-3.5-3.8a.71.71,0,0,1,.233-.528.828.828,0,0,1,.6-.224.79.79,0,0,1,.5.16,1.581,1.581,0,0,1,.336.512,3.5,3.5,0,0,0,.368.64,1.4,1.4,0,0,0,.52.416,2.1,2.1,0,0,0,.9.159A2.162,2.162,0,0,0,1.217-3a.978.978,0,0,0,.48-.816.855.855,0,0,0-.264-.64A1.525,1.525,0,0,0,.769-4.82Q.545-4.9-.079-5.044l-.272-.064a8.414,8.414,0,0,1-1.584-.472,2.485,2.485,0,0,1-1.025-.76,1.874,1.874,0,0,1-.368-1.176A1.962,1.962,0,0,1-2.938-8.73a2.51,2.51,0,0,1,1.152-.808A4.982,4.982,0,0,1-.018-9.825a4.515,4.515,0,0,1,1.4.192,3.113,3.113,0,0,1,.976.5,2.2,2.2,0,0,1,.576.648,1.36,1.36,0,0,1,.184.655.794.794,0,0,1-.224.56.772.772,0,0,1-.592.24.736.736,0,0,1-.48-.144,2.209,2.209,0,0,1-.352-.466,1.8,1.8,0,0,0-.56-.7A1.665,1.665,0,0,0-.146-8.6a1.877,1.877,0,0,0-1.081.28.777.777,0,0,0-.4.634.787.787,0,0,0,.128.416,1.39,1.39,0,0,0,.384.288,3.976,3.976,0,0,0,.512.192q.384.112.832.208a11.107,11.107,0,0,1,1.344.368A4.629,4.629,0,0,1,2.6-5.745a2.123,2.123,0,0,1,.68.72A2.111,2.111,0,0,1,3.5-3.988,2.327,2.327,0,0,1,3.09-2.644Z" transform="translate(6.994 12.611)"/></svg>`,
        action: 'skype:'
    },
    talegram: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Telegram" d="M0-12.608a6.858,6.858,0,0,0-3.536.959,6.79,6.79,0,0,0-2.5,2.509,6.839,6.839,0,0,0-.96,3.532,6.839,6.839,0,0,0,.96,3.532A6.79,6.79,0,0,0-3.536.433,6.858,6.858,0,0,0,0,1.392,6.858,6.858,0,0,0,3.536.433,6.914,6.914,0,0,0,6.048-2.076a6.839,6.839,0,0,0,.96-3.532,6.839,6.839,0,0,0-.96-3.532,6.914,6.914,0,0,0-2.512-2.509A6.858,6.858,0,0,0,0-12.608ZM2.159-2.284a1.045,1.045,0,0,0-.064.112.355.355,0,0,1-.208.144A.492.492,0,0,1,1.5-2.06L-.288-3.419-1.377-4.28v-.032L1.951-7.318l.1-.144q0-.1-.112-.048l-.128.048-4.24,2.685L-4.2-5.369l-.144-.078A.321.321,0,0,1-4.5-5.67a.183.183,0,0,1,.056-.168.641.641,0,0,1,.17-.121l7.1-2.781.144-.051a.546.546,0,0,1,.288-.016q.144.032.144.224Z" transform="translate(6.992 12.608)"/></svg>`,
        action: 'https://t.me/'
    },
    viber: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 13 14"><path id="Viber" d="M5.532-9.975A4.3,4.3,0,0,0,4.658-12a3.675,3.675,0,0,0-1.947-1.134A13.565,13.565,0,0,0-4.2-13.166,4,4,0,0,0-6.02-12.155a3.6,3.6,0,0,0-.943,1.8,11.687,11.687,0,0,0-.1,4.787A3.677,3.677,0,0,0-4.43-2.473a.451.451,0,0,1,.239.148.473.473,0,0,1,.064.273q-.014.8-.014,2.41L-4.055.4l.029-.042Q-3.884.2-3.812.134q1.231-1.316,1.861-1.959a.458.458,0,0,1,.344-.168,15.087,15.087,0,0,0,4.249-.438A3.429,3.429,0,0,0,5.418-5.1a11.626,11.626,0,0,0,.115-4.871ZM-.454-11.613a3.491,3.491,0,0,1,1.749.518,3.7,3.7,0,0,1,1.281,1.3A3.576,3.576,0,0,1,3.07-8v.084a.9.9,0,0,1-.043.238.2.2,0,0,1-.193.1.2.2,0,0,1-.208-.133A.752.752,0,0,1,2.6-7.96v-.028a3.737,3.737,0,0,0-.415-1.569A3.031,3.031,0,0,0,1.038-10.7a2.859,2.859,0,0,0-.7-.28q-.243-.056-.73-.14l-.2-.028a.649.649,0,0,1-.2-.037.168.168,0,0,1-.086-.182.233.233,0,0,1,.143-.21.8.8,0,0,1,.258-.028Zm.272,1.4a.243.243,0,0,1-.057-.014.531.531,0,0,1-.243-.056.2.2,0,0,1-.086-.224.2.2,0,0,1,.143-.182.889.889,0,0,1,.258.014l.057.014a2.654,2.654,0,0,1,1.621.793,2.191,2.191,0,0,1,.615,1.555v.07a.654.654,0,0,1-.043.21.194.194,0,0,1-.179.091.193.193,0,0,1-.193-.091.654.654,0,0,1-.043-.21v-.028a2.311,2.311,0,0,0-.537-1.337,2.383,2.383,0,0,0-1.31-.606Zm1.374,1.75a.247.247,0,0,1-.172.224.264.264,0,0,1-.186-.035.2.2,0,0,1-.086-.147A.882.882,0,0,0-.126-9.3a.232.232,0,0,1-.159-.1.219.219,0,0,1-.01-.175.174.174,0,0,1,.109-.129A.877.877,0,0,1,.079-9.74a.98.98,0,0,1,.551.189,1.384,1.384,0,0,1,.444.49.936.936,0,0,1,.122.6Zm.043,4.549a9.89,9.89,0,0,1-5.824-5.8,1.046,1.046,0,0,1,.007-.77,1.663,1.663,0,0,1,.494-.714,1.106,1.106,0,0,1,.73-.294.711.711,0,0,1,.515.21A6.5,6.5,0,0,1-1.809-9.936a.773.773,0,0,1,.115.518.756.756,0,0,1-.318.448.977.977,0,0,0-.413.5,1.093,1.093,0,0,0,.172.637A3.581,3.581,0,0,0-.393-6.112a.751.751,0,0,0,.451.049.709.709,0,0,0,.363-.259A1.115,1.115,0,0,1,1-6.758a1.18,1.18,0,0,1,.709.224,11.79,11.79,0,0,1,1.159.855q.258.224.243.406A1.2,1.2,0,0,1,2.8-4.5a1.866,1.866,0,0,1-.759.553,1.071,1.071,0,0,1-.8.035Z" transform="translate(7.264 13.6)"/></svg>`,
        action: 'viber://chat?number='
    },
    imo: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Imo" d="M3.18,6.191h.445a.171.171,0,0,1,.125.06.179.179,0,0,1,.042.134v2.1s.01.226-.177.226H3.159s-.135-.009-.135-.194V6.35A.157.157,0,0,1,3.18,6.191ZM3.4,5.668a.387.387,0,0,1-.368-.187.4.4,0,0,1,0-.419.386.386,0,0,1,.37-.183.387.387,0,0,1,.368.188.4.4,0,0,1,0,.419.386.386,0,0,1-.37.182ZM8.167,8.712H7.755c-.2,0-.156-.29-.156-.29V7.339c0-.367-.116-.578-.364-.578a.378.378,0,0,0-.354.274.67.67,0,0,0-.03.2V8.465s0,.248-.213.248H6.3S6.1,8.7,6.1,8.443V7.3c0-.317-.111-.536-.354-.536a.39.39,0,0,0-.359.284.529.529,0,0,0-.03.2v1.2s.026.269-.171.269H4.857c-.246,0-.246-.269-.246-.269V6.994c0-.246-.014-.653-.014-.653a.148.148,0,0,1,.044-.112.142.142,0,0,1,.111-.04h.321a.185.185,0,0,1,.179.152l.019.19h.017a.851.851,0,0,1,.748-.4.7.7,0,0,1,.677.429h.01a1.116,1.116,0,0,1,.318-.3.878.878,0,0,1,.467-.124c.475,0,.834.34.834,1.094V8.444c0,.251-.177.269-.177.269Zm2.148-2.023c-.369,0-.506.387-.506.759,0,.433.177.759.506.759.3,0,.49-.3.49-.759C10.8,7.071,10.663,6.689,10.315,6.689Zm-.02,2.079a1.2,1.2,0,0,1-.92-.361,1.25,1.25,0,0,1-.352-.939,1.274,1.274,0,0,1,.363-.975,1.22,1.22,0,0,1,.959-.361,1.189,1.189,0,0,1,.914.358,1.241,1.241,0,0,1,.35.932,1.284,1.284,0,0,1-.356.973,1.231,1.231,0,0,1-.948.376ZM7.141,1.026A5.884,5.884,0,0,0,2,4.1a6.128,6.128,0,0,0,.1,6.076A1.59,1.59,0,0,1,1.5,11.957a4.976,4.976,0,0,0,2-.179A5.806,5.806,0,0,0,10.488,12a6.085,6.085,0,0,0,2.288-6.746A5.915,5.915,0,0,0,7.141,1.026Zm0,12.981a6.731,6.731,0,0,1-3.869-1.218,4.921,4.921,0,0,1-2.2.279c-.741-.09-1.518-.714-.77-1.325,1.159-.944.848-1.317.848-1.317A7.106,7.106,0,0,1,2.337,2.008,6.758,6.758,0,0,1,10.609.968,7.061,7.061,0,0,1,13.761,8.84a6.884,6.884,0,0,1-6.619,5.167Z" transform="translate(-0.001 -0.007)"/></svg>`,
        action: 'tel:'
    },
    medium: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 8"><path id="Medium" d="M0,4.049A3.974,3.974,0,0,1,3.967.077,3.975,3.975,0,0,1,7.9,4.086,3.974,3.974,0,0,1,3.949,8.077,3.988,3.988,0,0,1,0,4.049Zm8.28,0c0-2.093.884-3.792,1.974-3.792s1.974,1.7,1.974,3.792h0c0,2.094-.884,3.792-1.974,3.792S8.28,6.143,8.28,4.049Zm4.332,0c0-1.876.311-3.4.694-3.4S14,2.174,14,4.049s-.311,3.4-.694,3.4S12.611,5.926,12.611,4.049Z" transform="translate(0 -0.077)"/></svg>`,
        action: ''
    },
    twitch: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 13 14"><path id="Twitch" d="M-5.8-12.592l-.887,2.432V-.432h3.251v1.84h1.773L.106-.432h2.66L6.312-4.08v-8.512ZM5.13-4.688,3.062-2.56H-.188L-1.96-.736V-2.56H-4.62v-8.816H5.132Zm-6.5-4.254H-.188v3.648H-1.37Zm3.251,0H3.062v3.648H1.881Z" transform="translate(6.688 12.592)"/></svg>`,
        action: ''
    },
    discord:{
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 11"><path id="Discord" d="M11.838,1.324A11.274,11.274,0,0,0,8.992.413a.043.043,0,0,0-.046.022q-.2.366-.354.751a10.319,10.319,0,0,0-3.2,0A7.705,7.705,0,0,0,5.034.435.045.045,0,0,0,4.989.413a11.241,11.241,0,0,0-2.847.911.041.041,0,0,0-.019.017A12.476,12.476,0,0,0,.056,9.555a.05.05,0,0,0,.018.034A11.465,11.465,0,0,0,3.567,11.41a.044.044,0,0,0,.049-.017,8.607,8.607,0,0,0,.714-1.2.047.047,0,0,0,0-.037.045.045,0,0,0-.026-.026,7.536,7.536,0,0,1-1.088-.536.047.047,0,0,1,0-.08c.073-.057.147-.115.217-.176a.042.042,0,0,1,.045-.006,8.04,8.04,0,0,0,7.029,0,.042.042,0,0,1,.046.006c.07.059.143.119.218.176a.047.047,0,0,1,0,.08,7.072,7.072,0,0,1-1.088.536.045.045,0,0,0-.026.027.047.047,0,0,0,0,.037,9.663,9.663,0,0,0,.714,1.2.044.044,0,0,0,.049.017,11.427,11.427,0,0,0,3.5-1.822.047.047,0,0,0,.018-.033A12.393,12.393,0,0,0,11.856,1.34.036.036,0,0,0,11.838,1.324ZM4.672,7.915A1.372,1.372,0,0,1,3.418,6.461,1.365,1.365,0,0,1,4.672,5.006a1.314,1.314,0,0,1,.922.457,1.4,1.4,0,0,1,.335,1A1.365,1.365,0,0,1,4.672,7.915Zm4.65,0A1.372,1.372,0,0,1,8.066,6.461,1.365,1.365,0,0,1,9.323,5.006a1.314,1.314,0,0,1,.922.457,1.4,1.4,0,0,1,.335,1,1.4,1.4,0,0,1-.336,1,1.318,1.318,0,0,1-.921.458Z" transform="translate(0.005 -0.412)"/></svg>`,
        action: ''
    },
    vimeo: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 12"><path id="Vimeo" d="M-6.992-8.441l.559.723.32-.22a2.458,2.458,0,0,1,.656-.315q.416-.11.592.076a6.428,6.428,0,0,1,.5,1.227q.208.645.72,2.264.466,1.494.672,2.107a11.568,11.568,0,0,0,.5,1.352,3.209,3.209,0,0,0,.656.914A2.179,2.179,0,0,0-.786.254,1.592,1.592,0,0,0,.462,0,14.354,14.354,0,0,0,1.917-1.114,20.454,20.454,0,0,0,3.885-3.095,16.892,16.892,0,0,0,5.772-5.736a10.118,10.118,0,0,0,1.152-3.1,2.7,2.7,0,0,0-.256-1.981,1.86,1.86,0,0,0-1.3-.849,3.351,3.351,0,0,0-1.787.189,4.068,4.068,0,0,0-1.64,1.1,3.6,3.6,0,0,0-.928,1.887A1.818,1.818,0,0,1,2.062-8.8a.9.9,0,0,1,.688.346,1.262,1.262,0,0,1,.233.81A2.248,2.248,0,0,1,2.672-6.6,13.605,13.605,0,0,1,1.525-4.785q-.52.668-.8.668T.158-4.84Q-.05-5.39-.434-6.868q-.1-.393-.256-1.321Q-.882-9.368-1.026-9.9a3.079,3.079,0,0,0-.622-1.321A1.139,1.139,0,0,0-2.8-11.586a4.267,4.267,0,0,0-1.424.645,10.738,10.738,0,0,0-1.36,1.053Q-6.1-9.416-6.6-8.882Z" transform="translate(6.992 11.711)"/></svg>`,
        action: ''
    },
    phone: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 13.997"><path id="Phone" d="M12.085,8.679a1.811,1.811,0,0,0-2.5,0l-1.114.938A7.47,7.47,0,0,1,4.42,5.564l.935-1.11a1.817,1.817,0,0,0,0-2.5S4.277.548,4.258.53A1.8,1.8,0,0,0,1.731.5l-.672.584c-4.51,4.8,7.128,16.441,11.92,11.861l.533-.614a1.811,1.811,0,0,0,0-2.557l-1.426-1.1Z" transform="translate(-0.04 0.002)"/></svg>`,
        action: 'tel:'
    },
    mobile: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 14"><path id="Mobile" d="M-1020.188-460a2.87,2.87,0,0,1-2.813-2.917v-.583h9v.583a2.87,2.87,0,0,1-2.812,2.917Zm1.125-1.75a.573.573,0,0,0,.562.583.573.573,0,0,0,.562-.583.573.573,0,0,0-.562-.583A.573.573,0,0,0-1019.063-461.75Zm-3.938-2.917v-6.416a2.87,2.87,0,0,1,2.813-2.917h3.375a2.87,2.87,0,0,1,2.812,2.917v6.416Z" transform="translate(1023 474)"/></svg>`,
        action: 'tel:'
    },
    github: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Github" d="M-1084.263-397.653c0-.236.008-1.009.008-1.97a1.74,1.74,0,0,0-.475-1.329c1.559-.178,3.2-.784,3.2-3.541a2.811,2.811,0,0,0-.721-1.927,2.638,2.638,0,0,0-.069-1.9s-.588-.193-1.923.735a6.6,6.6,0,0,0-1.753-.242,6.585,6.585,0,0,0-1.752.242c-1.338-.928-1.925-.735-1.925-.735a2.636,2.636,0,0,0-.068,1.9,2.814,2.814,0,0,0-.722,1.927c0,2.75,1.634,3.365,3.189,3.546a1.547,1.547,0,0,0-.445.96,1.469,1.469,0,0,1-2.037-.6,1.475,1.475,0,0,0-1.073-.74s-.684-.01-.048.436a1.887,1.887,0,0,1,.778,1.05s.411,1.281,2.358.847c0,.6.009,1.165.009,1.336,0,.19-.128.412-.478.345a7.165,7.165,0,0,1-4.786-6.81,7.09,7.09,0,0,1,7-7.177,7.091,7.091,0,0,1,7,7.177,7.164,7.164,0,0,1-4.783,6.809.645.645,0,0,1-.126.013A.336.336,0,0,1-1084.263-397.653Zm-4.354-1.921c0-.06.066-.108.15-.11s.152.046.152.1-.066.108-.149.11h0C-1088.551-399.469-1088.616-399.517-1088.618-399.574Zm.537-.043c-.01-.059.049-.118.13-.134s.157.02.167.079-.048.117-.131.133a.2.2,0,0,1-.038,0A.121.121,0,0,1-1088.08-399.617Zm-.984.053c-.079-.024-.131-.09-.115-.147s.1-.083.176-.058.131.09.115.146a.113.113,0,0,1-.116.067A.2.2,0,0,1-1089.064-399.564Zm-.527-.317a.141.141,0,0,1-.04-.184c.039-.044.121-.031.182.027s.079.14.038.184a.082.082,0,0,1-.064.026A.171.171,0,0,1-1089.591-399.881Zm-.355-.433c-.043-.064-.043-.14,0-.171s.112,0,.156.06a.129.129,0,0,1,0,.172.068.068,0,0,1-.04.012A.155.155,0,0,1-1089.946-400.315Zm-.263-.385c-.046-.05-.054-.117-.02-.149s.1-.017.144.033a.109.109,0,0,1,.02.148.065.065,0,0,1-.046.017A.138.138,0,0,1-1090.208-400.7Zm-.26-.269c-.051-.023-.079-.072-.063-.108s.07-.046.121-.022.08.072.063.108a.067.067,0,0,1-.065.035A.125.125,0,0,1-1090.469-400.969Z" transform="translate(1093 411.296)"/></svg>`,
        action: ''
    },
    behance: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Behance" d="M-1015.521-396.7a2.509,2.509,0,0,1-2.479-2.543v-8.914a2.509,2.509,0,0,1,2.479-2.543h9.041a2.51,2.51,0,0,1,2.48,2.543v8.914a2.51,2.51,0,0,1-2.48,2.543Zm5.061-6.273a2.147,2.147,0,0,0,2.222,2.34,1.943,1.943,0,0,0,2.034-1.5h-1.053a.985.985,0,0,1-.943.58.994.994,0,0,1-1.066-1.131h3.131c0-.073.009-.154.009-.231a2.17,2.17,0,0,0-2.113-2.416A2.211,2.211,0,0,0-1010.459-402.973Zm-5.415,2.324h2.909c1.091-.006,2.113-.541,2.112-1.791a1.594,1.594,0,0,0-1.094-1.655,1.194,1.194,0,0,0,.819-1.186c0-1.224-.89-1.522-1.919-1.522h-2.828Zm6.365-5.327h2.431v-.605h-2.431Zm-5.046,4.276v-1.7h1.437c.581,0,.947.25.947.882s-.437.814-.975.814Zm5.287-1.756a.942.942,0,0,1,.991-.952c.6,0,.9.359.953.952Zm-5.285-.962v-1.436h1.237c.476,0,.9.135.9.7,0,.522-.335.734-.806.734Z" transform="translate(1018 410.7)"/></svg>`,
        action: ''
    },
    dribble: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Dribbble" d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm4.623,3.226a5.951,5.951,0,0,1,1.352,3.72,14.125,14.125,0,0,0-4.161-.19c-.046-.1-.083-.2-.129-.311-.121-.289-.258-.584-.395-.866A8,8,0,0,0,11.623,3.226Zm-3.8,1.465A32.34,32.34,0,0,0,5.6,1.192,6.088,6.088,0,0,1,7,1.032a5.965,5.965,0,0,1,3.963,1.5A6.775,6.775,0,0,1,7.827,4.692Zm-3.371-3.1A37.719,37.719,0,0,1,6.673,5.049a22.449,22.449,0,0,1-5.527.729A6.009,6.009,0,0,1,4.457,1.594ZM1.017,6.825a21.858,21.858,0,0,0,6.142-.85c.175.334.334.675.486,1.017l-.236.068A9.51,9.51,0,0,0,2.55,11,5.965,5.965,0,0,1,1.017,7.008V6.825ZM8.025,7.987c.015-.008.023-.008.038-.015A24.7,24.7,0,0,1,9.339,12.5,5.878,5.878,0,0,1,7,12.983a5.938,5.938,0,0,1-3.667-1.26A8.2,8.2,0,0,1,8.025,7.987Zm2.308,3.971A25.749,25.749,0,0,0,9.172,7.7a8.735,8.735,0,0,1,3.72.258A5.929,5.929,0,0,1,10.333,11.958Z"fill-rule="evenodd"/></svg>`,
        action: ''
    },
    link: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path id="Globe" d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM8.885,1.174a1.016,1.016,0,0,1,.09.2A1.245,1.245,0,0,1,8.5,2.654c-.417.315-.96.371-1.018,1.05a.982.982,0,0,0,.187.639c.338.5.206.665-.082.761a1.881,1.881,0,0,1-1.458-.438,1.166,1.166,0,0,0-1.581.193.645.645,0,0,0-.085.954.911.911,0,0,0,.781.274h.033l.108,0,0,0c.09,0,.181-.006.274,0a.975.975,0,0,1,.7.2.407.407,0,0,1,.044.463h0c-.072.135-.149.243,0,.315l.073.026a.014.014,0,0,0,.011,0A2.32,2.32,0,0,0,7.5,7.2c.741-.1,1.19-.49,1.71-.2.219.122.315.472.53.639.318.245.639.2.91.416.7.578.625.84.438,1.715a8.118,8.118,0,0,1-1.059,2.552,6.11,6.11,0,0,1-1.444.589c-.053-.19-.1-.381-.131-.546-.128-.6-.551-1.488-1.164-1.523A2.037,2.037,0,0,1,5.142,9.188C5.2,7.6,4.7,7.11,3.976,7.11c-2.194,0-2.663-1.626-2-3.565.012-.032.029-.061.041-.093A6.109,6.109,0,0,1,8.885,1.174Z" fill="#263548"/></svg>`,
        action: ''
    }
}