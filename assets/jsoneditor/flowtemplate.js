const initialJSON = {
    "description": "Basic Example IVR",
    "states": [
      {
        "name": "Trigger",
        "type": "trigger",
        "transitions": [
          {
            "next": "sms_greeting",
            "event": "incomingMessage"
          },
          {
            "next": "voice_greeting",
            "event": "incomingCall"
          },
          {
            "event": "incomingRequest"
          },
          {
            "event": "incomingParent"
          }
        ],
        "properties": {
          "offset": {
            "x": -380,
            "y": -50
          }
        }
      },
      {
        "name": "voice_check_branch",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "voice_repeat",
            "event": "noMatch"
          }
        ],
        "properties": {
          "input": "{{widgets.get_branch.SpeechResult}}",
          "offset": {
            "x": 780,
            "y": 1810
          }
        }
      },
      {
        "name": "get_branch",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "key_input_check_branch",
            "event": "keypress"
          },
          {
            "next": "voice_confirmation",
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "voice": "Polly.Emma",
          "speech_timeout": "auto",
          "offset": {
            "x": -730,
            "y": 580
          },
          "loop": 1,
          "hints": "Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine",
          "finish_on_key": "",
          "say": "You can say...",
          "language": "en-GB",
          "stop_gather": false,
          "gather_language": "en-US",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "sms_greeting",
        "type": "send-message",
        "transitions": [
          {
            "event": "sent"
          },
          {
            "event": "failed"
          }
        ],
        "properties": {
          "offset": {
            "x": -1120,
            "y": 210
          },
          "service": "{{trigger.message.InstanceSid}}",
          "channel": "{{trigger.message.ChannelSid}}",
          "from": "{{flow.channel.address}}",
          "to": "{{contact.channel.address}}",
          "body": "Response message..."
        }
      },
      {
        "name": "voice_check_correct",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "voice_repeat",
            "event": "noMatch"
          },
          {
            "next": "voice_thank_you",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "Yes",
                "arguments": [
                  "{{widgets.voice_confirmation.SpeechResult}}"
                ],
                "type": "contains",
                "value": "Yes"
              }
            ]
          },
          {
            "next": "get_branch",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "No",
                "arguments": [
                  "{{widgets.voice_confirmation.SpeechResult}}"
                ],
                "type": "contains",
                "value": "No"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.voice_confirmation.SpeechResult}}",
          "offset": {
            "x": 330,
            "y": 1200
          }
        }
      },
      {
        "name": "voice_confirmation",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "event": "keypress"
          },
          {
            "next": "voice_check_correct",
            "event": "speech"
          },
          {
            "next": "voice_repeat",
            "event": "timeout"
          }
        ],
        "properties": {
          "voice": "Polly.Emma",
          "speech_timeout": "auto",
          "offset": {
            "x": 30,
            "y": 910
          },
          "loop": 1,
          "hints": "Yes, No",
          "finish_on_key": "#",
          "say": "Thank you, I heard {{widgets.get_branch.SpeechResult}}. Is this correct?",
          "language": "en-GB",
          "stop_gather": true,
          "gather_language": "en-US",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "voice_greeting",
        "type": "say-play",
        "transitions": [
          {
            "next": "get_branch",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "voice": "Polly.Emma",
          "offset": {
            "x": -660,
            "y": 300
          },
          "loop": 1,
          "say": "Response message...",
          "language": "en-GB"
        }
      },
      {
        "name": "voice_repeat",
        "type": "say-play",
        "transitions": [
          {
            "next": "get_branch",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "voice": "Polly.Amy",
          "offset": {
            "x": 1080,
            "y": 300
          },
          "loop": 1,
          "say": "I'm sorry, I don't understand what you said.",
          "language": "en-GB"
        }
      },
      {
        "name": "voice_thank_you",
        "type": "say-play",
        "transitions": [
          {
            "next": "voice_check_branch",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "voice": "Polly.Emma",
          "offset": {
            "x": 530,
            "y": 1530
          },
          "loop": 1,
          "say": "Thank you, please wait a moment while I connect your call.",
          "language": "en-GB"
        }
      },
      {
        "name": "key_input_check_branch",
        "type": "split-based-on",
        "transitions": [
          {
            "event": "noMatch"
          }
        ],
        "properties": {
          "input": "{{widgets.get_branch.Digits}}",
          "offset": {
            "x": -1230,
            "y": 900
          }
        }
      }
    ],
    "initial_state": "Trigger",
    "flags": {
      "allow_concurrent_calls": true
    }
  }