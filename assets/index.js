// PHONE VALIDATION
var phoneInputField = document.querySelector("input[id='branch0num']");
var phoneInput0 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch1num']");
var phoneInput1 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch2num']");
var phoneInput2 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch3num']");
var phoneInput3 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch4num']");
var phoneInput4 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch5num']");
var phoneInput5 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch6num']");
var phoneInput6 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch7num']");
var phoneInput7 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch8num']");
var phoneInput8 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phoneInputField = document.querySelector("input[id='branch9num']");
var phoneInput9 = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
// PHONE VALIDATION

// HELPER - COPY TO CLIPBOARD
function copyToClipboard(text){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
// HELPER - COPY TO CLIPBOARD

// HELPER - UPDATE JSON
function update_json(initialJSON){
    // VARIABLES
    var updatedJSON = JSON.parse(JSON.stringify(initialJSON));
    var pollyVoice = document.querySelector("select[id='input-voice']").value;
    var voiceGreeting = document.querySelector("input[id='input-voice-greeting']").value;
    var smsGreeting = document.querySelector("input[id='input-sms-greeting']").value;
    var branchNum = document.getElementById("branches").value;
    var phoneNumbers = [];
    if (phoneInput0.getNumber() != ''){phoneNumbers.push(phoneInput0.getNumber())};
    if (phoneInput1.getNumber() != ''){phoneNumbers.push(phoneInput1.getNumber())};
    if (phoneInput2.getNumber() != ''){phoneNumbers.push(phoneInput2.getNumber())};
    if (phoneInput3.getNumber() != ''){phoneNumbers.push(phoneInput3.getNumber())};
    if (phoneInput4.getNumber() != ''){phoneNumbers.push(phoneInput4.getNumber())};
    if (phoneInput5.getNumber() != ''){phoneNumbers.push(phoneInput5.getNumber())};
    if (phoneInput6.getNumber() != ''){phoneNumbers.push(phoneInput6.getNumber())};
    if (phoneInput7.getNumber() != ''){phoneNumbers.push(phoneInput7.getNumber())};
    if (phoneInput8.getNumber() != ''){phoneNumbers.push(phoneInput8.getNumber())};
    if (phoneInput9.getNumber() != ''){phoneNumbers.push(phoneInput9.getNumber())};
    var branchDescriptions = [];
    for (i = 0; i < branchNum; i++){
        branchDescriptions.push(document.querySelector("input[id='branch" + i + "']").value);
    }
    //console.log(phoneNumbers, branchDescriptions);

    // POLLY VOICE
    for (i = 0; i < updatedJSON.states.length; i++){
        if (updatedJSON.states[i].name == "voice_greeting"){
            updatedJSON.states[i].properties.voice = pollyVoice;
        }
        if (updatedJSON.states[i].name == "get_branch"){
            updatedJSON.states[i].properties.voice = pollyVoice;
        }
        if (updatedJSON.states[i].name == "voice_confirmation"){
            updatedJSON.states[i].properties.voice = pollyVoice;
        }
        if (updatedJSON.states[i].name == "voice_repeat"){
            updatedJSON.states[i].properties.voice = pollyVoice;
        }
        if (updatedJSON.states[i].name == "voice_thank_you"){
            updatedJSON.states[i].properties.voice = pollyVoice;
        }
    }

    // POLLY VOICE

    // TRIGGERS

    // incoming call => greeting message
    for (i = 0; i < updatedJSON.states.length; i++){
        if (updatedJSON.states[i].name == "voice_greeting"){
            updatedJSON.states[i].properties.say = voiceGreeting;
        }
    }
    // incoming sms => greeting message
    for (i = 0; i < updatedJSON.states.length; i++){
        if (updatedJSON.states[i].name == "sms_greeting"){
            updatedJSON.states[i].properties.body = smsGreeting;
        }
    }

    // FLOW ROUTING

    // get_branch
    for (i = 0; i < updatedJSON.states.length; i++){
        if (updatedJSON.states[i].name == "get_branch"){
            updatedJSON.states[i].properties.say = "For the following options, you may reach the desired extension by saying or pressing the corresponding number on the phone keypad. ";
            for (j = 0; j < branchNum; j++){
                updatedJSON.states[i].properties.say += "For " + document.querySelector("input[id='branch" + j + "']").value + ", say or press " + j + ". ";
            }
        }
    }
    // key_input_check_branch
    for (i = 0; i < updatedJSON.states.length; i++){
        if (updatedJSON.states[i].name == "key_input_check_branch"){
            for (j = 0; j < branchNum; j++){
                tempObj = {
                    "next": "connect_" + j,
                    "event": "match",
                    "conditions": [
                        {
                        "friendly_name": "Connect " + j,
                        "arguments": [
                            "{{widgets.get_department.Digits}}"
                        ],
                        "type": "equal_to",
                        "value": j
                        }
                    ]
                }
                updatedJSON.states[i].transitions.push(tempObj)
            }
        }
    }
    // voice_input_check_branch
    for (i = 0; i < updatedJSON.states.length; i++){
        if (updatedJSON.states[i].name == "voice_check_branch"){
            for (j = 0; j < branchNum; j++){
                tempObj = {
                    "next": "connect_" + j,
                    "event": "match",
                    "conditions": [
                        {
                        "friendly_name": "Connect " + j,
                        "arguments": [
                            "{{widgets.get_branch.SpeechResult}}"
                        ],
                        "type": "contains",
                        "value": j
                        }
                    ]
                }
                updatedJSON.states[i].transitions.push(tempObj);
            }
        }
    }

    // connect call widgets
    for (i = 0; i < branchNum; i++){
        tempObj = {
            "name": "connect_" + i,
            "type": "connect-call-to",
            "transitions": [
                {
                "event": "callCompleted"
                }
            ],
            "properties": {
                "offset": {
                "x": 1480,
                "y": 1920
                },
                "caller_id": "{{contact.channel.address}}",
                "noun": "number",
                "to": phoneNumbers[i],
                "timeout": 30
            }
        }
        updatedJSON.states.push(tempObj);
    }
    return updatedJSON;
}
// HELPER - UPDATE JSON

// BUILD BRANCHES
function build_branches(){
    var branchNum = document.getElementById("branches").value;
    var allRows = document.querySelectorAll("tr");
    for (i = 1; i < allRows.length; i++){
        allRows[i].style.visibility = "hidden";
    }
    for (i = 0; i < branchNum; i++){
        allRows[i+1].style.visibility = "visible";
    }
}
// BUILD BRANCHES

// SAVE TO FLOW AND COPY
function save_to_flow_and_copy(){
    // update json
    updatedJSON = update_json(initialJSON);

    // update editor
    editor.set(updatedJSON);

    // copy updated content to clipboard
    copyToClipboard(JSON.stringify(updatedJSON));

    // alert when done
    document.querySelector('p[id="clipboardStatusMessage"]').innerHTML = "JSON updated and copied to clipboard!";
}
// SAVE TO FLOW AND COPY

// SAVE TO FLOW AND CREATE FLOW
function save_to_flow_and_create_flow(){
    document.querySelector('p[id="createFlowStatusMessage"]').innerHTML = "One moment please while we process your request.";

    // update json
    var updatedJSON = update_json(initialJSON);

    // update editor
    editor.set(updatedJSON);

    // create data object
    const data = {
        passcode: document.querySelector('input[id="input-passcode"]').value,
        payload: updatedJSON,
    };

    // create flow
    fetch('createflow', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
      .then ((resp) => {
          console.log(resp);
          if (resp.ok) {
              return resp.json();
          } else if (resp.status === 401) {
              throw new Error('Invalid Passcode');
          } else {
              throw new Error(
                  'Unexpected error. Please check the logs for what went wrong.'
              );
          }
      })
      .then ((body) => {
          document.querySelector('p[id="createFlowStatusMessage"]').innerHTML = "JSON updated and flow created! Check your Twilio Console.";
      })
      .catch((err) => {
          document.querySelector('p[id="createFlowStatusMessage"]').innerHTML = err;
      })
}
// SAVE TO FLOW AND CREATE FLOW